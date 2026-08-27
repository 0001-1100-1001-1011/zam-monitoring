export default function BoxInfo({ hosts = [], logs = [] }) {
  const hostCount = hosts?.length ?? 0;
  const logsCount = logs?.length ?? 0;
  const lastLog = logs[0]?.TimeCreated.slice(0, 9) ?? "0";

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
