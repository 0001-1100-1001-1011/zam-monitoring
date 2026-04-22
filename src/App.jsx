import { Navigate, Route, Routes } from "react-router";
import Login from "./pages/Login/Login.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
