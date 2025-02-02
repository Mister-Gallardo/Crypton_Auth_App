import React, {
  createContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

type ThemeMode = "light" | "dark" | "system";

interface ThemeContextProps {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  themeMode: "system",
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    return (localStorage.getItem("app-theme") as ThemeMode) || "system";
  });

  useEffect(() => {
    localStorage.setItem("app-theme", themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prev) => {
      const nextTheme =
        prev === "light" ? "dark" : prev === "dark" ? "system" : "light";
      return nextTheme;
    });
  };

  // для системной темы
  const prefersDarkMode = useMemo(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }, []);

  const theme = useMemo(() => {
    const mode =
      themeMode === "system" ? (prefersDarkMode ? "dark" : "light") : themeMode;

    return createTheme({
      palette: {
        mode,
        background: {
          default: mode === "dark" ? "#1a1d29" : "#f0f4f8",
        },
        text: {
          primary: mode === "dark" ? "#f0f0f0" : "#333",
        },
      },
    });
  }, [themeMode, prefersDarkMode]);

  console.log("provide");
  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
