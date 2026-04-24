export default function UniversalTable({ columns, data }) {
  const renderAutoCell = (key, value) => {
    if (key === "status") {
      if (value === "online")
        return (
          <span className="inline-flex rounded border border-emerald-600 bg-emerald-900/40 text-emerald-300 px-2 py-0.5 text-[11px] font-medium">
            ONLINE
          </span>
        );

      if (value === "offline")
        return (
          <span className="inline-flex rounded border border-red-600 bg-red-900/40 text-red-300 px-2 py-0.5 text-[11px] font-medium">
            OFFLINE
          </span>
        );

      if (value === "Abwesend" || value === "Idle")
        return (
          <span className="inline-flex rounded border border-yellow-600 bg-yellow-900/40 text-yellow-300 px-2 py-0.5 text-[11px] font-medium">
            {value.toUpperCase()}
          </span>
        );
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
                <td key={col.key} className="px-3 py-2 text-gray-300">
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
