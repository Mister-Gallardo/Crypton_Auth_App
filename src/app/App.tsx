import { Route, Routes, useNavigate } from "react-router-dom";
import Auth from "../pages/Auth/Auth";
import Profile from "../pages/Profile/Profile";
import Layout from "./Layout/Layout";
import { useEffect } from "react";
import axios from "axios";
import { ThemeProvider } from "./providers/ThemeContext";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = localStorage.getItem("token");

    if (jwtToken) {
      navigate("/profile");
      axios.defaults.headers["Authorization"] = `${jwtToken}`;
    } else {
      navigate("/auth");
    }
  }, []);

  return (
    <ThemeProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
