import { useState } from "react";
import { NavLink } from "react-router";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const base =
    "block px-4 py-2 rounded text-sm font-medium transition-colors";
  const active = "bg-red-900/40 text-red-400 border border-red-800";
  const inactive = "text-gray-300 hover:bg-red-900/20";

  return (
    <aside
      className={`
        fixed right-0 top-0 
        ${open ? "h-full w-56 p-4" : "h-11.5 w-14 p-2"} 
        bg-[#0f0f0f] border-l border-white/200 
        z-40 transition-all
      `}
    >
      {/* Toggle Button*/}
      <button
        onClick={() => setOpen(!open)}
        className="text-red-400 text-2xl"
      >
        ≡
      </button>

      {/* OpenMenu */}
      {open && (
        <>
          <h2 className="text-red-500 text-lg font-semibold tracking-tight mt-4 mb-4">
            Navigation
          </h2>

          <nav className="space-y-2">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/users"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              Benutzer
            </NavLink>
            
            <NavLink
              to="/hosts"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              Hosts
            </NavLink>

            <NavLink
              to="/logs"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              Logs
            </NavLink>
             <NavLink
              to="/settings"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              Einstellungen
            </NavLink>

            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              Logout
            </NavLink>
          </nav>
        </>
      )}
    </aside>
  );
}
