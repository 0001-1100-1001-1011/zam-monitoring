import { useState, useEffect } from "react";
import HostTable from "../components/HostTable.jsx";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";

export default function Hosts() {
  const [hosts, setHosts] = useState([]);

  useEffect(() => {
    const dummy = [
      {
        id: 1,
        Hostname: "SRV-1",
        role: "Server",
        status: "online",
        lastOnline: "2026-04-23",
        cpu: "18%",
      },
      {
        id: 2,
        Hostname: "SRV-2",
        role: "Server",
        status: "offline",
        lastOnline: "2026-04-22",
        cpu: "0%",
      },
      {
        id: 3,
        Hostname: "Client-1",
        role: "Client",
        status: "Idle",
        lastOnline: "2026-04-23",
        cpu: "5%",
      },
    ];

    setHosts(dummy);
  }, []);

  return (
    <>
      <Sidebar />
      <Header />

      <div className="min-h-screen bg-[var(--bg)] text-white flex flex-col items-center py-16">
        <div className="border-4 border-red-600 bg-zinc-800 rounded-3xl p-10 w-[800px] space-y-8">
          <h1 className="text-3xl font-bold text-center text-red-500">
            Hosts
          </h1>
          <p className="text-center text-gray-300">
            Aktive Hosts, Rollen und letzte Aktivitäten.
          </p>

          <HostTable hosts={hosts} />
        </div>
      </div>
    </>
  );
}
