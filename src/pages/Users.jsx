import { useState, useEffect } from "react";
import UserTable from "../components/UserTable.jsx";
import Header from "../components/Header-BacktoDash.jsx";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const dummy = [
      {
        id: 1,
        name: "Marco",
        role: "Planlos",
        status: "online",
        lastLogin: "2026-04-23",
        time: "18:22",
      },
      {
        id: 2,
        name: "Alik",
        role: "Macher",
        status: "offline",
        lastLogin: "2026-04-22",
        time: "09:14",
      },
      {
        id: 3,
        name: "Zoisk",
        role: "Gott",
        status: "Abwesend",
        lastLogin: "2026-04-23",
        time: "20:01",
      },
    ];
    setUsers(dummy);
  }, []);

  return (
    <>
      <Header />

      <div className="min-h-screen bg-[var(--bg)] text-white flex flex-col items-center py-16">
        <div className="border-4 border-red-600 bg-zinc-800 rounded-3xl p-10 w-[800px] space-y-8">
          <h1 className="text-3xl font-bold text-center text-red-500">
            Benutzer
          </h1>
          <p className="text-center text-gray-300">
            Aktive Benutzer, Rollen und letzte Aktivitäten.
          </p>

          <UserTable users={users} />
        </div>
      </div>
    </>
  );
}
