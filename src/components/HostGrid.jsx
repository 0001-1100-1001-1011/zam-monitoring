import { Laptop } from "lucide-react";

export default function HostGrid({ hosts }) {
  return (
    <div className="grid grid-cols-8 gap-4 p-4 m-4">
      {hosts.map((host) => (
        <button
          key={host.id}
          className="flex flex-col items-center rounded-xl border-2 border-black bg-zinc-900 p-4 hover:scale-105 hover:bg-zinc-600 hover:border-white"
        >
          <Laptop
            className={`h-15 w-15 ${host.online ? "text-green-400" : "text-red-400"}`}
          />
          <p className="mt-2 text-xs text-zinc-100">{host.hostname}</p>
          <p className="text-xs text-zinc-400">
            {new Date(host.last_seen).toLocaleString("de-DE")}
          </p>
        </button>
      ))}
    </div>
  );
}
