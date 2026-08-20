import { useEffect, useState } from "react";
import { getHosts } from "../../services/hostsService";
import { getLogs } from "../../services/logsService";

export default function BoxInfo() {
  const [hosts, setHosts] = useState([]);
  const [logs, setLogs] = useState([]);
  const [setError] = useState(null);

  useEffect(() => {
    async function initLoad() {
      try {
        const data = await getHosts();
        setHosts(data ?? "unknown");
      } catch (error) {
        setError(error.message);
      }

      try {
        const data = await getLogs("");
        setLogs(data.logs ?? "unknown");
      } catch (error) {
        setError(error.message);
      }
    }

    initLoad();
  }, []);

  const hostCount = hosts?.length ?? 0;
  const logsCount = logs?.length ?? 0;
  const lastLog = logs?.[0]?.time_created?.slice(0, 10) ?? 0;

  return (
    <div className="justify-items-center flex flex-row justify-center">
      {/* CLIENT COUNTER */}
      <div className="flex flex-row gap-4 p-4">
        <button className="flex flex-col w-3xs items-center border-2 border-black bg-zinc-900 p-4">
          <h1>{hostCount}</h1>
          <p>Detected hosts</p>
        </button>
      </div>

      {/* LOGS COUNTER */}
      <div className="flex flex-row gap-4 p-4">
        <button className="flex flex-col w-3xs items-center border-2 border-black bg-zinc-900 p-4">
          <h1>{logsCount}</h1>
          <p>Logs collected</p>
        </button>
      </div>

      {/* TIMESTAMP COUNTER */}
      <div className="flex flex-row gap-4 p-4">
        <button className="flex flex-col w-3xs items-center border-2 border-black bg-zinc-900 p-4">
          <h1>{lastLog}</h1>
          <p>Last log received</p>
        </button>
      </div>
    </div>
  );
}
