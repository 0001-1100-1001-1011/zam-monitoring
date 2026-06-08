"""
ZAM Monitoring Agent
Pfad : zam-projekt/agent/agent.py
Start: pip install pywin32 && python agent.py
"""
#Pfade oberhalb ggf. anpassen
import hashlib
import json
import platform
import socket
import time
import urllib.request
import urllib.error
from datetime import datetime

import win32evtlog
import win32evtlogutil
import win32con
import pywintypes

SERVER_URL   = "http://localhost:4000/api/logs"
INTERVAL_SEC = 10
INITIAL_LOGS = 5
MAX_LOGS     = 20

HOSTNAME  = socket.gethostname()
CLIENT_ID = hashlib.md5(HOSTNAME.encode()).hexdigest()[:8]

CHANNELS = ["Application", "System", "Security"]

last_record = {ch: None for ch in CHANNELS}

LEVEL_MAP = {
    win32con.EVENTLOG_INFORMATION_TYPE: "INFO",
    win32con.EVENTLOG_WARNING_TYPE:     "WARNING",
    win32con.EVENTLOG_ERROR_TYPE:       "ERROR",
    win32con.EVENTLOG_AUDIT_SUCCESS:    "INFO",
    win32con.EVENTLOG_AUDIT_FAILURE:    "WARNING",
}

def map_level(event_type):
    return LEVEL_MAP.get(event_type, "INFO")

def event_to_dict(ev, channel):
    try:
        message = win32evtlogutil.SafeFormatMessage(ev, channel)
    except Exception:
        message = " ".join(str(s) for s in (ev.StringInserts or [])) or "—"

    try:
        ts = datetime.fromtimestamp(
            int(ev.TimeGenerated.timestamp())
        ).isoformat()
    except Exception:
        ts = datetime.now().isoformat()

    return {
        "clientId":     CLIENT_ID,
        "hostname":     HOSTNAME,
        "timestamp":    ts,
        "level":        map_level(ev.EventType),
        "keyword":      "Überwachung gescheitert" if ev.EventType == win32con.EVENTLOG_AUDIT_FAILURE else ("Überwachung erfolgreich" if ev.EventType == win32con.EVENTLOG_AUDIT_SUCCESS else ""),
        "source":       channel,
        "eventSource":  str(ev.SourceName),
        "eventId":      ev.EventID & 0xFFFF,
        "message":      message.strip().replace("\r\n", " ").replace("\n", " "),
        "user":         str(ev.Sid) if ev.Sid else "SYSTEM",
        "platform":     platform.system(),
        "osRelease":    platform.release(),
        "recordNumber": ev.RecordNumber,
    }


def read_events(channel, limit=None):
    events = []
    try:
        handle = win32evtlog.OpenEventLog(None, channel)
        flags  = win32evtlog.EVENTLOG_BACKWARDS_READ | win32evtlog.EVENTLOG_SEQUENTIAL_READ
        raw    = win32evtlog.ReadEventLog(handle, flags, 0)
        win32evtlog.CloseEventLog(handle)

        for ev in raw[:limit or MAX_LOGS]:
            if last_record[channel] is not None and ev.RecordNumber <= last_record[channel]:
                continue
            events.append(event_to_dict(ev, channel))

        if raw:
            last_record[channel] = raw[0].RecordNumber

    except pywintypes.error as e:
        print(f"[WARN] {channel}: {e}")

    return events


def push_log(log):
    payload = json.dumps(log).encode("utf-8")
    req = urllib.request.Request(
        SERVER_URL,
        data=payload,
        headers={"Content-Type": "application/json", "X-Client-Id": CLIENT_ID},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=5) as resp:
            if resp.status == 200:
                ts = log["timestamp"][11:19]
                print(f"[{ts}] ✓  {log['level']:<7}  {log['source']:<12}  {log['eventSource']:<30}  EventId:{log['eventId']}")
                return True
    except urllib.error.URLError as e:
        print(f"[ERROR] Verbindung fehlgeschlagen: {e.reason}")
    return False

def main():
    print("=== ZAM Monitoring Agent ===")
    print(f"Client-ID : {CLIENT_ID}")
    print(f"Hostname  : {HOSTNAME}")
    print(f"Server    : {SERVER_URL}")
    print(f"Interval  : {INTERVAL_SEC}s")
    print(f"Kanäle    : {', '.join(CHANNELS)}")
    print("=================================================\n")

    print(f"Pushe die letzten {INITIAL_LOGS} Events pro Kanal...\n")
    for channel in CHANNELS:
        try:
            handle = win32evtlog.OpenEventLog(None, channel)
            flags  = win32evtlog.EVENTLOG_BACKWARDS_READ | win32evtlog.EVENTLOG_SEQUENTIAL_READ
            raw    = win32evtlog.ReadEventLog(handle, flags, 0)
            win32evtlog.CloseEventLog(handle)

            initial = raw[:INITIAL_LOGS]
            for ev in reversed(initial):  # älteste zuerst pushen
                push_log(event_to_dict(ev, channel))

            if raw:
                last_record[channel] = raw[0].RecordNumber

        except pywintypes.error as e:
            print(f"[WARN] {channel}: Zugriff verweigert ({e}) – ggf. als Admin starten")

    print("\nWarte auf neue Events...\n")

    try:
        while True:
            time.sleep(INTERVAL_SEC)
            total = 0
            for channel in CHANNELS:
                events = read_events(channel)
                for ev in reversed(events):  # älteste zuerst
                    push_log(ev)
                    total += 1
            if total == 0:
                print(f"[{datetime.now().strftime('%H:%M:%S')}] Keine neuen Events")
    except KeyboardInterrupt:
        print("\n[Agent gestoppt]")


if __name__ == "__main__":
    main()
