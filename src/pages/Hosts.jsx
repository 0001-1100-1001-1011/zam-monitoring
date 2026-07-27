import { useEffect, useState, useCallback } from "react";
import HostTable from "../components/HostTable.jsx";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";

const API_URL = "http://localhost:4000";

export default function Hosts() {
  const [hosts, setHosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHosts = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/api/hosts`);

      if (!res.ok) {
        throw new Error("Server-Fehler beim Abrufen der Hosts");
      }

      const data = await res.json();
      setHosts(data.hosts ?? []);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    (async () => {
      await fetchHosts();
    })();

    const interval = setInterval(fetchHosts, 10000);
    return () => clearInterval(interval);
  }, [fetchHosts]);

  return (
    <>
      <Sidebar />
      <Header />

      <div className="min-h-screen bg-[var(--bg)] text-white flex flex-col items-center py-16">
        {error && (
          <div className="bg-red-900 border border-red-500 text-red-200 rounded-xl px-6 py-3 text-sm mb-8">
            ⚠ API nicht erreichbar: {error}
          </div>
        )}

        {loading && <p className="text-zinc-400 text-sm mb-8">Lade Hosts...</p>}

        <div className="border-4 border-red-600 bg-zinc-800 rounded-3xl p-10 w-[800px] space-y-8">
          <h1 className="text-3xl font-bold text-center text-red-500">Hosts</h1>
          <p className="text-center text-gray-300">
            Aktive Hosts, Rollen und letzte Aktivitäten.
          </p>

          <HostTable hosts={hosts} />
        </div>
      </div>
    </>
  );
}
