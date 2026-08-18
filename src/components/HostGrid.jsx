import { useEffect, useState } from "react";
import { getHosts } from "../../services/hostsService";
import { Laptop } from "lucide-react";

export default function HostGrid({ onSelect }) {
  const [hosts, setHosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [setError] = useState(null);

  useEffect(() => {
    async function loadHosts() {
      try {
        const data = await getHosts();
        setHosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadHosts();
  }, []);

  if (loading) {
    return <p>Loading Hosts...</p>;
  }

  return (
    <div className="grid grid-cols-8 gap-4 p-4 m-4">
      {hosts.map((host) => (
        <button
          key={host.id}
          onClick={() => onSelect(host)}
          className="flex flex-col items-center rounded-xl border-2 border-black bg-zinc-900 p-4 hover:scale-105 hover:bg-zinc-600 hover:border-white"
        >
          <Laptop className="h-15 w-15 text-red-400 " />
          <h3 className="mt-2 font-semibold text-zinc-100">{host.id}</h3>
          <p className="text-sm text-zinc-400">{host.hostname}</p>
        </button>
      ))}
    </div>
  );
}
