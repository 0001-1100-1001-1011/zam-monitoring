export default function UserTable({ users }) {
  return (
    <div className="overflow-hidden rounded-md border border-red-900 bg-[#1a1a1a] shadow-lg">
      <table className="min-w-full border-collapse text-sm text-gray-200">
        <thead className="bg-[#2a0000] text-white-400 uppercase text-xs tracking-wide">
          <tr>
            <th className="px-3 py-2 text-left">Name</th>
            <th className="px-3 py-2 text-left">Role</th>
            <th className="px-3 py-2 text-left">Status</th>
            <th className="px-3 py-2 text-left">Last Login</th>
            <th className="px-3 py-2 text-left">Time</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr
              key={u.id}
              className="border-t border-red-900/40 hover:bg-red-900/10 transition-colors"
            >
              <td className="px-3 py-2 text-gray-200">{u.name}</td>
              <td className="px-3 py-2 text-gray-300">{u.role}</td>

              <td className="px-3 py-2">
                {u.status == "online" && (
                  <span className="inline-flex rounded border border-emerald-600 bg-emerald-900/40 text-emerald-300 px-2 py-0.5 text-[11px] font-medium">
                    ONLINE
                  </span>
                )}
         {u.status == "offline" && (
                  <span className="inline-flex rounded border border-red-600 bg-red-900/40 text-red-300 px-2 py-0.5 text-[11px] font-medium">
                    OFFLINE
                  </span>
                )}
                         {u.status == "Abwesend" && (
                  <span className="inline-flex rounded border yellow-600 bg-yellow-900/40 text-yellow-300 px-2 py-0.5 text-[11px] font-medium">
                    Abwesend
                  </span>
                )}
              </td>

              <td className="px-3 py-2 text-gray-400">{u.lastLogin}
              </td>
              
              <td className="px-3 py-2 text-gray-400">{u.time}
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}
