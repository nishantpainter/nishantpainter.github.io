"use client";

import { Inter } from "next/font/google";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { CssBaseline } from "@mui/material";

export const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const theme = createTheme({
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

export const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default Theme;
