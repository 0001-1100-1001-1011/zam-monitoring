import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router";
import LogsTable from "../components/LogsTable.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";

const API_BASE = "http://localhost:4000";

const normalize = (logs) =>
  logs.slice(0, 5).map((l) => ({
    id:           l.id,
    TimeCreated:  l.timestamp
      ? l.timestamp.replace("T", " ").slice(0, 16)
      : "—",
    Hostname:     l.hostname,
    EventID:      l.eventId,
    Level:        l.level,
    Source:       l.source,
    Keyword:      l.keyword ?? "",
    Message:      l.message?.length > 80 ? l.message.slice(0, 80) + "…" : l.message,
    _fullMessage: l.message,
  }));

export default function Logs() {
  const navigate = useNavigate();
  const [applicationLogs, setApplicationLogs] = useState([]);
  const [systemLogs, setSystemLogs] = useState([]);
  const [securityLogs, setSecurityLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLogs = useCallback(async () => {
    try {
      const [appRes, sysRes, secRes] = await Promise.all([
        fetch(`${API_BASE}/api/logs?source=Application&limit=5`),
        fetch(`${API_BASE}/api/logs?source=System&limit=5`),
        fetch(`${API_BASE}/api/logs?source=Security&limit=5`),
      ]);

      if (!appRes.ok || !sysRes.ok || !secRes.ok) {
        throw new Error("Server-Fehler beim Abrufen der Logs");
      }

      const [appData, sysData, secData] = await Promise.all([
        appRes.json(),
        sysRes.json(),
        secRes.json(),
      ]);

      setApplicationLogs(normalize(appData.logs ?? []));
      setSystemLogs(normalize(sysData.logs ?? []));
      setSecurityLogs(normalize(secData.logs ?? []));
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    (async () => {
      await fetchLogs();
    })();

    const interval = setInterval(fetchLogs, 10000);
    return () => clearInterval(interval);
  }, [fetchLogs]);

  return (
    <>
      <Sidebar />
      <Header />

      <div className="min-h-screen bg-[var(--bg)] text-white flex flex-col items-center py-16 space-y-16">

        {error && (
          <div className="bg-red-900 border border-red-500 text-red-200 rounded-xl px-6 py-3 text-sm">
            ⚠ API nicht erreichbar: {error}
          </div>
        )}

        {loading && (
          <p className="text-zinc-400 text-sm">Lade Logs...</p>
        )}

        {/* APPLICATION LOGS */}
        <div className="border-4 border-red-600 bg-zinc-800 rounded-3xl p-10 w-[900px] space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-red-500">Application Logs</h1>
            <button
              onClick={() => navigate("/logs/application")}
              className="text-sm px-4 py-2 border border-red-600 text-white-400 rounded-xl hover:bg-red-600 hover:text-white transition-colors"
            >
              Alle anzeigen →
            </button>
          </div>
          <LogsTable logs={applicationLogs} />
        </div>

        {/* SYSTEM LOGS */}
        <div className="border-4 border-red-600 bg-zinc-800 rounded-3xl p-10 w-[900px] space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-red-500">System Logs</h1>
            <button
              onClick={() => navigate("/logs/system")}
              className="text-sm px-4 py-2 border border-red-600 text-white-400 rounded-xl hover:bg-red-600 hover:text-white transition-colors"
            >
              Alle anzeigen →
            </button>
          </div>
          <LogsTable logs={systemLogs} />
        </div>

        {/* SECURITY LOGS */}
        <div className="border-4 border-red-600 bg-zinc-800 rounded-3xl p-10 w-[900px] space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-red-500">Security Logs</h1>
            <button
              onClick={() => navigate("/logs/security")}
              className="text-sm px-4 py-2 border border-red-600 text-white rounded-xl hover:bg-red-600 hover:text-white transition-colors"
            >
              Alle anzeigen →
            </button>
          </div>
          <LogsTable logs={securityLogs} />
        </div>

      </div>
    </>
  );
}