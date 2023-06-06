"use client";

import { useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Logo } from "@/app/components";
import { useThemeContext } from "@/app/theme";

import MenuIcon from "@mui/icons-material/Menu";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useTheme } from "@mui/material";

function Navigation() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id="navigation-menu-button"
        aria-controls={open ? "navigation-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="navigation-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "navigation-menu-button",
        }}
      >
        {[
          { label: "Blogs", href: "/blogs" },
          { label: "Projects", href: "/projects" },
          { label: "Publications", href: "/publications" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ].map(({ label, href }) => (
          <MenuItem
            key={href}
            component={Link}
            href={href}
            onClick={handleClose}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

function ThemeModeButton({
  onClick,
  darkMode,
}: {
  onClick?: (event: React.SyntheticEvent) => any;
  darkMode?: boolean;
}) {
  return (
    <IconButton onClick={onClick}>
      {darkMode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
    </IconButton>
  );
}

export default function Header() {
  const { isDarkMode, toggleMode } = useThemeContext();
  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{ backgroundColor: "background.default" }}
      >
        <Toolbar disableGutters>
          <Box display="flex" component={Container} alignItems="center">
            <Box
              component={Link}
              href="/"
              flexGrow={1}
              display="flex"
              alignItems="center"
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              <Logo darkMode={isDarkMode} />
            </Box>
            <Box display="flex" alignItems="center" columnGap={1}>
              <ThemeModeButton darkMode={isDarkMode} onClick={toggleMode} />
              <Navigation />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
