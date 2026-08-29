{
  /*import Sidebar from "../components/Sidebar.jsx";*/
}
import HeaderNavigation from "../components/HeaderNavigation.jsx";
import SoftwaresTable from "../components/SoftwaresTable.jsx";
import { useSoftware } from "../hooks/useSoftware.jsx";

export default function Softwares() {
  const { software, error, loading } = useSoftware();

  return (
    <>
      <HeaderNavigation />
      {/*<Sidebar />*/}

      <div className="min-h-screen bg-(--bg) text-white flex flex-col items-center py-16">
        {error && (
          <div className="bg-red-900 border border-red-500 text-red-200 rounded-xl px-6 py-3 text-sm mb-8">
            ⚠ API nicht erreichbar: {error}
          </div>
        )}

        {loading && (
          <p className="text-zinc-400 text-sm mb-8">Lade Softwares...</p>
        )}

        <div className="border-4 border-red-600 bg-zinc-800 rounded-3xl p-10 space-y-8">
          <h1 className="text-3xl font-bold text-center text-red-500">
            Software
          </h1>
          <p className="text-center text-gray-300">
            Installed applications from different hosts
          </p>

          <SoftwaresTable softwares={software} />
        </div>
      </div>
    </>
  );
}
