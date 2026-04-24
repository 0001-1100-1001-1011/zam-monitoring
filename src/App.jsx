import { Navigate, Route, Routes } from "react-router";
import Login from "./pages/Login.jsx";
import Users from "./pages/Users.jsx";
import Hosts from "./pages/Hosts.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<Users />} />
        <Route path="/users" element={<Users-fetch />} /> {/*//Test-api route needs to be updated approiately */}
         <Route path="/hosts" element={<Hosts />} />
      </Routes>
    </>
  );
}


export default App;
