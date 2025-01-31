import React, { useContext } from "react";
import { Button } from "@mui/material";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeContext } from "../../app/providers/ThemeContext";

const ThemeToggleButton: React.FC = () => {
  const { themeMode, toggleTheme } = useContext(ThemeContext);

  // Для определения, какая системная тема используется, если выбран "system"
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const currentTheme =
    themeMode === "system" ? (prefersDarkMode ? "dark" : "light") : themeMode;

  return (
    <Button
      sx={{
        position: "absolute",
        right: "5vw",
        top: "3vw",
        width: "74px",
        height: "64px",
        backgroundColor:
          currentTheme === "dark"
            ? "rgba(255, 255, 255, 0.1)"
            : "rgb(153, 204, 255, 0.3)",
        borderColor:
          currentTheme === "dark" ? "rgb(51, 153, 255)" : "rgb(0, 59, 117)",
        color: currentTheme === "dark" ? "#fff" : "rgb(48, 55, 65);",
        borderRadius: "50px",
        "&:hover": {
          backgroundColor:
            currentTheme === "dark"
              ? "rgba(255, 255, 255, 0.2)"
              : "rgb(153, 204, 255, 0.7)",
        },
      }}
      variant="outlined"
      onClick={toggleTheme}
    >
      {themeMode === "system" ? (
        <SettingsBrightnessIcon sx={{ fontSize: 40 }} />
      ) : currentTheme === "light" ? (
        <LightModeIcon sx={{ fontSize: 40 }} />
      ) : (
        <DarkModeIcon sx={{ fontSize: 40 }} />
      )}
    </Button>
  );
};

export default ThemeToggleButton;
