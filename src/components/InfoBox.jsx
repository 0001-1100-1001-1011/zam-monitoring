import { Laptop } from "lucide-react";
import { useHosts } from "../state/hostContext";

export default function BoxInfo() {
  const { hosts } = useHosts();

  const hostCount = hosts.length;

  const logs = [
    {
      count: "957",
    },
  ];
  const timestamp = [
    {
      date: "23.07.2026",
    },
  ];

  return (
    <div className="justify-items-center flex flex-row justify-center">
      {/* CLIENT COUNTER */}
      <div className="flex flex-row gap-4 p-4">
        <button className="flex flex-col w-3xs items-center border-2 border-black bg-zinc-900 p-4">
          <h1>{hostCount}</h1>
          <p>Active hosts</p>
        </button>
      </div>

      {/* LOGS COUNTER */}
      {logs.map((logs) => (
        <div className="flex flex-row gap-4 p-4">
          <button className="flex flex-col w-3xs items-center border-2 border-black bg-zinc-900 p-4">
            <h1>{logs.count}</h1>
            <p>Logs collected</p>
          </button>
        </div>
      ))}
      {/* TIMESTAMP COUNTER */}
      {timestamp.map((timestamp) => (
        <div className="flex flex-row gap-4 p-4">
          <button className="flex flex-col w-3xs items-center border-2 border-black bg-zinc-900 p-4">
            <h1>{timestamp.date}</h1>
            <p>Last log received</p>
          </button>
        </div>
      ))}
    </div>
  );
}
