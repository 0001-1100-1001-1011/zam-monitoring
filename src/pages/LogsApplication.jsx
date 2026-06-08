import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router";
import AllTables from "../components/AllTables.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";

const API_BASE = "http://localhost:4000";

const COLUMNS = [
  { key: "TimeCreated", label: "Zeit" },
  { key: "Hostname",    label: "Host" },
  { key: "EventID",     label: "Event ID" },
  { key: "Level",       label: "Level" },
  { key: "Message",     label: "Nachricht" },
];

const normalize = (logs) =>
  logs.map((l) => ({
    id:           l.id,
    TimeCreated:  l.timestamp ? l.timestamp.replace("T", " ").slice(0, 16) : "—",
    Hostname:     l.hostname,
    EventID:      l.eventId,
    Level:        l.level,
    Message:      l.message?.length > 80 ? l.message.slice(0, 80) + "…" : l.message,
    _fullMessage: l.message,
  }));

export default function LogsApplication() {
  const navigate = useNavigate();
  const [logs, setLogs]         = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);
  const [search, setSearch]     = useState("");
  const [levelFilter, setLevel] = useState("");

  const fetchLogs = useCallback(async () => {
    try {
      let url = `${API_BASE}/api/logs?source=Application&limit=50`;
      if (levelFilter) url += `&level=${levelFilter}`;
      if (search)      url += `&search=${encodeURIComponent(search)}`;
      const res  = await fetch(url);
      if (!res.ok) throw new Error("Server-Fehler");
      const data = await res.json();
      setLogs(normalize(data.logs ?? []));
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [levelFilter, search]);

  useEffect(() => {
    const loadLogs = async () => {
      await fetchLogs();
    };

    loadLogs();
    const interval = setInterval(fetchLogs, 10000);
    return () => clearInterval(interval);
  }, [fetchLogs]);

  return (
    <>
      <Sidebar />
      <Header />
      <div className="min-h-screen bg-[var(--bg)] text-white flex flex-col items-center py-16 px-4">
        <div className="w-[900px] space-y-6">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate("/logs")} className="text-sm px-3 py-1.5 border border-red-600 text-white-800 rounded-lg hover:bg-red-700 transition-colors">←</button>
            <h1 className="text-3xl font-bold text-white-500">Application Logs</h1>
          </div>
          <div className="flex gap-3">
            <input type="text" placeholder="Nachricht durchsuchen..." value={search} onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-zinc-800 border border-zinc-600 text-white text-sm rounded-lg px-4 py-2 focus:outline-none focus:border-red-500" />
            <select value={levelFilter} onChange={(e) => setLevel(e.target.value)}
              className="bg-zinc-800 border border-zinc-600 text-white text-sm rounded-lg px-4 py-2 focus:outline-none focus:border-red-500">
              <option value="">Alle Level</option>
              <option value="INFO">INFO</option>
              <option value="WARNING">WARNING</option>
              <option value="ERROR">ERROR</option>
            </select>
            <button onClick={fetchLogs} className="text-sm px-4 py-2 border border-red-600 text-red-400 rounded-lg hover:bg-red-600 hover:text-white transition-colors">↻</button>
          </div>
          {error   && <div className="bg-red-900 border border-red-500 text-red-200 rounded-xl px-6 py-3 text-sm">⚠ {error}</div>}
          {loading && <p className="text-zinc-400 text-sm">Lade Logs...</p>}
          <div className="border-4 border-red-600 bg-zinc-800 rounded-3xl p-8">
            <p className="text-zinc-400 text-xs mb-4">{logs.length} Einträge</p>
            <AllTables columns={COLUMNS} data={logs} />
          </div>
        </div>
      </div>
    </>
  );
}
