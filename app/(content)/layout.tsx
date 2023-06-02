"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

import MenuIcon from "@mui/icons-material/Menu";

function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
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
        <MenuItem onClick={handleClose} component={Link} href="/blogs">
          Blogs
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} href="/publications">
          Publications
        </MenuItem>
      </Menu>
    </>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{ backgroundColor: "white" }}
      >
        <Toolbar disableGutters>
          <Box display="flex" component={Container} alignItems="center">
            <Box flexGrow={1}>
              <Typography
                component={Link}
                href="/"
                variant="h5"
                className="pointer"
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                <b>Nishant PAINTER</b>
              </Typography>
            </Box>
            <Navigation />
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      {children}
    </>
  );
}
