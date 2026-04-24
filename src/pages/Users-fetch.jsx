import { useEffect, useState } from "react";
import UserTable from "../components/UserTable.jsx";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("API Fehler:", err));
  }, []);

  return (
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
  );
}