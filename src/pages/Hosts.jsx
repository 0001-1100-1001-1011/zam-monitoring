import HostTable from "../components/HostTable.jsx";
import HeaderNavigation from "../components/HeaderNavigation.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { useHosts } from "../hooks/useHosts.jsx";

export default function Hosts() {
  const { hosts, loading, error } = useHosts();

  return (
    <>
      <HeaderNavigation />
      <Sidebar />

      <div className="min-h-screen bg-(--bg) text-white flex flex-col items-center py-16">
        {error && (
          <div className="bg-red-900 border border-red-500 text-red-200 rounded-xl px-6 py-3 text-sm mb-8">
            ⚠ API nicht erreichbar: {error}
          </div>
        )}

        {loading && <p className="text-zinc-400 text-sm mb-8">Lade Hosts...</p>}

        <div className="border-4 border-red-600 bg-zinc-800 rounded-3xl p-10 space-y-8">
          <h1 className="text-3xl font-bold text-center text-red-500">Hosts</h1>
          <p className="text-center text-gray-300">Aktive Hosts, Rollen und letzte Aktivitäten.</p>

          <HostTable hosts={hosts} />
        </div>
      </div>
    </>
  );
}
