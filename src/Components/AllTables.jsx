export default function AllTables({ columns, data }) {
  const renderAutoCell = (key, value) => {

    // -------------------------
    // STATUS BADGES
    // -------------------------
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

    // -------------------------
    // LEVEL BADGES (farbblind-freundlich)
    // -------------------------
    if (key === "Level") {
      const level = String(value).toLowerCase();

      if (level === "error") {
        return (
          <span className="text-red-300 font-semibold text-[12px] flex items-center gap-1">
            ⛔ ERROR
          </span>
        );
      }

      if (level === "warning" || level === "warn") {
        return (
          <span className="text-yellow-300 font-semibold text-[12px] flex items-center gap-1">
            ⚠️ WARNING
          </span>
        );
      }

      if (level === "information" || level === "info") {
        return (
          <span className="text-blue-300 font-semibold text-[12px] flex items-center gap-1">
            ⓘ INFO
          </span>
        );
      }
    }

    return value;
  };

  return (
    <div className="overflow-hidden rounded-md border border-red-900 bg-[#1a1a1a] shadow-lg">
      <table className="min-w-full border-collapse text-sm text-gray-200">

        <thead className="bg-[#2a0000] text-white uppercase text-xs tracking-wide">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-3 py-2 text-left">
                {col.label}
              </th>
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
                  {renderAutoCell(col.key, row[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}
