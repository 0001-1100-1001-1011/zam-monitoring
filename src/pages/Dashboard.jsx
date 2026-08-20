import HeaderNavigation from "../components/HeaderNavigation.jsx";
import HostGrid from "../components/HostGrid.jsx";
import BoxInfo from "../components/InfoBox.jsx";
import { useHosts } from "../components/useHosts.jsx";

export default function Dashboard() {
  const { hosts, loading, error } = useHosts();
  return (
    <>
      <div className="h-screen flex flex-col ">
        {/* HEADER */}
        <HeaderNavigation />
        {/* MAIN CONTAINER */}
        <div className="flex-1 overflow-auto bg-zinc-800  border border-black m-4">
          {/* QUICK INFO BOX */}
          <BoxInfo />
          {/* HOST GRID */}
          {loading && <p className="text-zinc-400 text-sm">Lade Hosts...</p>}
          {error && (
            <div className="bg-red-900 border border-red-500 text-red-200 rounded-xl px-6 py-3 text-sm">
              ⚠ API nicht erreichbar: {error}
            </div>
          )}
          <HostGrid hosts={hosts} />
        </div>
      </div>
    </>
  );
}
