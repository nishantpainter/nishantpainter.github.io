"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Inter } from "next/font/google";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import type { PaletteOptions } from "@mui/material/styles";

export const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const ThemeContext = createContext<any>({});

export const Theme = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<PaletteOptions["mode"]>("light");

  const toggleMode = useCallback(() => {
    setMode((mode) => (mode === "light" ? "dark" : "light"));
  }, []);

  const theme = createTheme({
    palette: {
      mode,
    },
    typography: {
      fontFamily: inter.style.fontFamily,
    },
    components: {
      MuiToolbar: {
        styleOverrides: {
          root: {
            height: 60,
          },
        },
      },
    },
  });

  const value = useMemo(
    () => ({ mode, isDarkMode: mode === "dark", toggleMode }),
    [mode, toggleMode]
  );

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);

export default Theme;
