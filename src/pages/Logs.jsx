import { useNavigate } from "react-router";
import { useLogs } from "../hooks/useLogs.jsx";
import LogsTable from "../components/LogsTable.jsx";
import Sidebar from "../components/Sidebar.jsx";
import HeaderNavigation from "../components/HeaderNavigation.jsx";

const normalize = (logs) =>
  logs.slice(0, 5).map((l) => ({
    id: l.id,
    TimeCreated: l.time_created
      ? new Date(l.time_created).toLocaleString("de-DE")
      : "—",
    Hostname: l.hostname,
    EventID: l.event_id,
    Level: l.level,
    Source: l.source,
    Keyword: l.keyword ?? "",
    Message: l.message?.length > 80 ? l.message.slice(0, 80) + "…" : l.message,
    _fullMessage: l.message,
  }));

export default function Logs() {
  const navigate = useNavigate();

  const {
    logs: applicationLogs,
    loading: appLoading,
    error: appError,
  } = useLogs("Application", { limit: 5, normalize });

  const {
    logs: systemLogs,
    loading: sysLoading,
    error: sysError,
  } = useLogs("System", { limit: 5, normalize });

  const {
    logs: securityLogs,
    loading: secLoading,
    error: secError,
  } = useLogs("Security", { limit: 5, normalize });

  const loading = appLoading || sysLoading || secLoading;
  const error = appError || sysError || secError;

  return (
    <>
      <Sidebar />
      <HeaderNavigation />

      <div className="min-h-screen bg-(--bg) text-white flex flex-col items-center py-16 space-y-16">
        {error && (
          <div className="bg-red-900 border border-red-500 text-red-200 rounded-xl px-6 py-3 text-sm">
            ⚠ API nicht erreichbar: {error}
          </div>
        )}

        {loading && <p className="text-zinc-400 text-sm">Lade Logs...</p>}

        {/* APPLICATION LOGS */}
        <div className="border-4 border-red-600 bg-zinc-800 rounded-3xl p-10 w-[900px] space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-red-500">
              Application Logs
            </h1>
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
              className="text-sm px-4 py-2 border border-red-600 text-white-400 rounded-xl hover:bg-red-600 hover:text-white transition-colors"
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
