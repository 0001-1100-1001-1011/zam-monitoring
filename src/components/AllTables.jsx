export default function AllTables({ columns, data }) {
  const renderAutoCell = (key, value, row) => {
    // STATUS BADGES
    if (key === "status") {
      const s = String(value).toLowerCase();
      if (s === "online")
        return (
          <span className="text-emerald-300 font-medium text-[11px] flex items-center gap-1">
            ● ONLINE
          </span>
        );
      if (s === "offline")
        return (
          <span className="text-red-300 font-medium text-[11px] flex items-center gap-1">
            ○ OFFLINE
          </span>
        );
      if (s === "abwesend" || s === "idle")
        return (
          <span className="text-yellow-300 font-medium text-[11px] flex items-center gap-1">
            ◐ {value.toUpperCase()}
          </span>
        );
    }

    // HOSTNAME
    if (key === "Hostname") {
      return (
        <span className="font-mono text-[11px] bg-zinc-700/60 text-zinc-300 px-2 py-0.5 rounded">
          {value || "—"}
        </span>
      );
    }

    // LEVEL BADGES
    if (key === "Level") {
      const level = String(value).toLowerCase();
      if (level === "error")
        return (
          <span className="text-red-300 font-semibold text-[12px] flex items-center gap-1">
            ⛔ ERROR
          </span>
        );
      if (level === "warning" || level === "warn")
        return (
          <span className="text-yellow-300 font-semibold text-[12px] flex items-center gap-1">
            ⚠️ WARNING
          </span>
        );
      if (level === "information" || level === "info")
        return (
          <span className="text-blue-300 font-semibold text-[12px] flex items-center gap-1">
            ⓘ INFO
          </span>
        );
    }

    // KEYWORD BADGES (Security)
    if (key === "Keyword") {
      if (!value) return <span className="text-gray-500 text-[11px]">—</span>;
      if (value === "Überwachung gescheitert")
        return (
          <span className="text-red-400 font-semibold text-[11px] flex items-center gap-1">
            🔒 Überwachung gescheitert
          </span>
        );
      if (value === "Überwachung erfolgreich")
        return (
          <span className="text-emerald-400 font-semibold text-[11px] flex items-center gap-1">
            🔓 Überwachung erfolgreich
          </span>
        );
      return <span className="text-gray-300 text-[11px]">{value}</span>;
    }

    // MESSAGE
    if (key === "Message") {
      if (!value)
        return (
          <span className="text-zinc-500 italic text-[11px]">
            Keine Nachricht
          </span>
        );
      return (
        <span title={row._fullMessage || value} className="cursor-help">
          {value}
        </span>
      );
    }

    return value;
  };

  return (
    <div className="overflow-hidden rounded-md border border-red-900 bg-[#1a1a1a] shadow-lg">
      <table className="min-w-full border-collapse text-sm text-gray-200">
        <thead className="bg-[#2a0000] text-white text-xs tracking-wide">
          <tr>
            {columns.map((col) => (
              <td
                key={col.key}
                className="px-3 py-2 whitespace-normal break-word-break text-semibold"
              >
                {col.label}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className="border-t border-red-900/40 hover:bg-red-900/10 transition-colors"
            >
              {columns.map((col) => (
                <td key={col.key} className="px-3 py-2">
                  {renderAutoCell(col.key, row[col.key], row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
