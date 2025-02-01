import { useEffect } from "react";
import axios from "axios";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Register from "../pages/register/ui/Register";
import Profile from "../pages/profile/Profile";
import Layout from "./Layout/Layout";
import { ThemeProvider } from "./providers/ThemeContext";
import Auth from "../pages/auth/ui/Auth";

function App() {
  localStorage.removeItem("token");

  useEffect(() => {
    const jwtToken = localStorage.getItem("token");

    if (jwtToken) axios.defaults.headers["Authorization"] = `${jwtToken}`;
  }, []);

  return (
    <ThemeProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Navigate to="/register" />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
