import { Navigate, Route, Routes } from "react-router";
import Login from "./pages/Login.jsx";
import Users from "./pages/Users.jsx";
import Hosts from "./pages/Hosts.jsx";
import Logs from "./pages/Logs.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/hosts" element={<Hosts />} />
        <Route path="/logs" element={<Logs />} />
      </Routes>
    </>
  );
}


export default App;
