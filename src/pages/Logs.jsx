import { useEffect, useState } from "react";
import LogsTable from "../components/LogsTable.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";

export default function Logs() {
  const [applicationLogs, setApplicationLogs] = useState([]);
  const [systemLogs, setSystemLogs] = useState([]);
  const [securityLogs, setSecurityLogs] = useState([]);

  useEffect(() => {
    // Dummy-Daten
    setApplicationLogs([
      {
        id: 1,
        TimeCreated: "2026-04-25 18:22",
        EventID: 1000,
        Level: "Error",
        Source: "Application Error",
        Message: "Programm XY ist abgestürzt",
      },
      {
        id: 2,
        TimeCreated: "2026-04-25 17:50",
        EventID: 2001,
        Level: "Warning",
        Source: "AppModel-Runtime",
        Message: "Langsame Antwortzeit",
      },
    ]);

    setSystemLogs([
      {
        id: 1,
        TimeCreated: "2026-04-25 18:10",
        EventID: 7001,
        Level: "Error",
        Source: "Service Control Manager",
        Message: "Dienst konnte nicht gestartet werden",
      },
      {
        id: 2,
        TimeCreated: "2026-04-25 17:40",
        EventID: 6008,
        Level: "Information",
        Source: "EventLog",
        Message: "Unerwarteter Shutdown erkannt",
      },
    ]);

    setSecurityLogs([
      {
        id: 1,
        TimeCreated: "2026-04-25 18:00",
        EventID: 4625,
        Level: "Warning",
        Source: "Microsoft-Windows-Security-Auditing",
        Message: "Fehlgeschlagener Login",
      },
      {
        id: 2,
        TimeCreated: "2026-04-25 17:30",
        EventID: 4634,
        Level: "Information",
        Source: "Security",
        Message: "Benutzer hat sich abgemeldet",
      },
    ]);
  }, []);

  return (
    <>
      <Sidebar />
      <Header />

      <div className="min-h-screen bg-[var(--bg)] text-white flex flex-col items-center py-16 space-y-16">

        {/* APPLICATION LOGS */}
        <div className="border-4 border-red-600 bg-zinc-800 rounded-3xl p-10 w-[900px] space-y-8">
          <h1 className="text-3xl font-bold text-center text-red-500">
            Application Logs
          </h1>
          <LogsTable logs={applicationLogs} />
        </div>

        {/* SYSTEM LOGS */}
        <div className="border-4 border-red-600 bg-zinc-800 rounded-3xl p-10 w-[900px] space-y-8">
          <h1 className="text-3xl font-bold text-center text-red-500">
            System Logs
          </h1>
          <LogsTable logs={systemLogs} />
        </div>

        {/* SECURITY LOGS */}
        <div className="border-4 border-red-600 bg-zinc-800 rounded-3xl p-10 w-[900px] space-y-8">
          <h1 className="text-3xl font-bold text-center text-red-500">
            Security Logs
          </h1>
          <LogsTable logs={securityLogs} />
        </div>

      </div>
    </>
  );
}
