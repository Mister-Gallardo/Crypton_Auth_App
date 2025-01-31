import { useEffect } from "react";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "../pages/Register/ui/Register";
import Profile from "../pages/Profile/Profile";
import Layout from "./Layout/Layout";
import { ThemeProvider } from "./providers/ThemeContext";
import Auth from "../pages/Auth/Auth";

function App() {
  const navigate = useNavigate();

  localStorage.removeItem('token');

  useEffect(() => {
    const jwtToken = localStorage.getItem("token");

    if (jwtToken) {
      navigate("/profile");
      axios.defaults.headers["Authorization"] = `${jwtToken}`;
    } else {
      navigate("/register");
    }
  }, []);

  return (
    <ThemeProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
