{
  /*import Sidebar from "../components/Sidebar.jsx";*/
}
import HeaderNavigation from "../components/HeaderNavigation.jsx";
import CveTable from "../components/CveTable.jsx";
import { useCve } from "../hooks/useCve.jsx";

export default function Cves() {
  const { cves, loading, error, search, setSearch } = useCve();

  return (
    <>
      {/*<Sidebar />*/}
      <HeaderNavigation />

      <div className="min-h-screen bg-(--bg) text-white flex flex-col items-center py-16">
        <div className="border-4 border-red-600 bg-zinc-800 rounded-3xl p-10 w-3/4 space-y-8">
          <h1 className="text-3xl font-bold text-center text-red-500">CVEs</h1>
          <p className="text-center text-gray-300">
            Current detections from services.nvd.nist.gov
          </p>

          {/* SEARCH */}
          <input
            type="text"
            placeholder="CVE suche..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-zinc-800 border border-zinc-600 text-white text-sm rounded-lg px-4 py-2 focus:outline-none focus:border-red-500"
          />

          {error && (
            <div className="bg-red-900 border border-red-500 text-red-200 rounded-xl px-6 py-3 text-sm">
              ⚠ API nicht erreichbar: {error}
            </div>
          )}

          {loading && <p className="text-zinc-400 text-sm">Lade CVEs...</p>}

          <CveTable cves={cves} />
        </div>
      </div>
    </>
  );
}
