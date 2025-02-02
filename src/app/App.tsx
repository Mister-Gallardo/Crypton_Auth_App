import React, { useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeProvider } from "./providers/ThemeContext";
import Routes from "./providers/Routes/Routes";

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const jwtToken = localStorage.getItem("token");

    if (jwtToken) {
      axios.defaults.headers["Authorization"] = `${jwtToken}`;
      location.pathname !== "/profile" && navigate("/profile");
    }
  }, []);

  console.log("app");
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
