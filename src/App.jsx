import { Navigate, Route, Routes } from "react-router";
import Login from "./pages/Login.jsx";
import Users from "./pages/Users.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<Users />} />
      </Routes>
    </>
  );
}


export default App;
