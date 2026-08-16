import { useNavigate } from "react-router";
import LogsTable from "../components/LogsTable.jsx";
import Sidebar from "../components/Sidebar.jsx";
import HeaderNavigation from "../components/HeaderNavigation.jsx";
import { useLogs } from "../components/useLogs.jsx";

export default function LogsSystem() {
  const navigate = useNavigate();
  const {
    logs,
    loading,
    error,
    search,
    setSearch,
    levelFilter,
    setLevel,
    refetch,
  } = useLogs("System");

  return (
    <>
      <Sidebar />
      <HeaderNavigation />
      <div className="min-h-screen bg-[var(--bg)] text-white flex flex-col items-center py-16 px-4">
        <div className="w-[900px] space-y-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/logs")}
              className="text-sm px-3 py-1.5 border border-red-600 text-white-800 rounded-lg hover:bg-red-700 transition-colors"
            >
              ←
            </button>
            <h1 className="text-3xl font-bold text-white-500">System Logs</h1>
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Nachricht durchsuchen..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-zinc-800 border border-zinc-600 text-white text-sm rounded-lg px-4 py-2 focus:outline-none focus:border-red-500"
            />
            <select
              value={levelFilter}
              onChange={(e) => setLevel(e.target.value)}
              className="bg-zinc-800 border border-zinc-600 text-white text-sm rounded-lg px-4 py-2 focus:outline-none focus:border-red-500"
            >
              <option value="">Alle Level</option>
              <option value="INFO">INFO</option>
              <option value="WARNING">WARNING</option>
              <option value="ERROR">ERROR</option>
            </select>
            <button
              onClick={refetch}
              className="text-sm px-4 py-2 border border-red-600 text-red-400 rounded-lg hover:bg-red-600 hover:text-white transition-colors"
            >
              ↻
            </button>
          </div>
          {error && (
            <div className="bg-red-900 border border-red-500 text-red-200 rounded-xl px-6 py-3 text-sm">
              ⚠ {error}
            </div>
          )}
          {loading && <p className="text-zinc-400 text-sm">Lade Logs...</p>}
          <div className="border-4 border-red-600 bg-zinc-800 rounded-3xl p-8">
            <p className="text-zinc-400 text-xs mb-4">{logs.length} Einträge</p>
            <LogsTable logs={logs} />
          </div>
        </div>
      </div>
    </>
  );
}
