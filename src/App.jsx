import { Navigate, Route, Routes } from "react-router";
import Login from "./pages/Login.jsx";
import Users from "./pages/Users.jsx";
import Hosts from "./pages/Hosts.jsx";
import Logs from "./pages/Logs.jsx";
import Cves from "./pages/cves.jsx";
import LogsApplication from "./pages/LogsApplication.jsx";
import LogsSystem from "./pages/LogsSystem.jsx";
import LogsSecurity from "./pages/LogsSecurity.jsx";
import Register from "./pages/Register.jsx";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/hosts" element={<Hosts />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/cves" element={<Cves />} />
        <Route path="/logs/application" element={<LogsApplication />} />
        <Route path="/logs/system" element={<LogsSystem />} />
        <Route path="/logs/security" element={<LogsSecurity />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
