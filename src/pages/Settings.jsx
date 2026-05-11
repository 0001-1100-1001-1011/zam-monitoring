import { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";

export default function Settings() {
  const [refreshRate, setRefreshRate] = useState(5);
  const [colorblindMode, setColorblindMode] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("de");
  const [username, setUsername] = useState("Marco");

  return (
    <>
      <Sidebar />
      <Header />

      <div className="min-h-screen bg-[#0f0f0f] text-white p-15 flex flex-col items-center">

        <div className="w-[800px] bg-zinc-900 border border-red-700 rounded-2xl p-10 space-y-10 shadow-xl">

          <h1 className="text-3xl font-bold text-red-500 text-center">
            Einstellungen
          </h1>

        
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-red-400">UI Einstellungen</h2>

            <div className="flex justify-between items-center">
              <label className="text-gray-300">Theme</label>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="bg-zinc-800 border border-zinc-600 rounded px-3 py-1"
              >
                <option value="dark">Dark Mode</option>
                <option value="light">Light Mode</option>
              </select>
            </div>

            <div className="flex justify-between items-center">
              <label className="text-gray-300">Farbenblind‑Modus</label>
              <input
                type="checkbox"
                checked={colorblindMode}
                onChange={() => setColorblindMode(!colorblindMode)}
                className="w-5 h-5 accent-red-600"
              />
            </div>
          </section>

          <hr className="border-red-700/40" />

        
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-red-400">System Einstellungen</h2>

            <div className="flex justify-between items-center">
              <label className="text-gray-300">Auto‑Refresh (Sekunden)</label>
              <input
                type="number"
                min="1"
                value={refreshRate}
                onChange={(e) => setRefreshRate(e.target.value)}
                className="bg-zinc-800 border border-zinc-600 rounded px-3 py-1 w-24"
              />
            </div>
          </section>

          <hr className="border-red-700/40" />

        
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-red-400">Benutzer Einstellungen</h2>

            <div className="flex justify-between items-center">
              <label className="text-gray-300">Sprache</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-zinc-800 border border-zinc-600 rounded px-3 py-1"
              >
                <option value="de">Deutsch</option>
                <option value="en">Englisch</option>
              </select>
            </div>

            <div className="flex justify-between items-center">
              <label className="text-gray-300">Benutzername</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-zinc-800 border border-zinc-600 rounded px-3 py-1 w-[300px]"
              />
            </div>
          </section>

          <button className="w-full bg-red-700 hover:bg-red-600 transition-colors py-3 rounded-xl font-bold">
            Änderungen speichern
          </button>

        </div>
      </div>
    </>
  );
}
