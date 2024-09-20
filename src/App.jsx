import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
