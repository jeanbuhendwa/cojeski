import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const NavBarMob = () => {
  const pages = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/about" },
    { label: "CAMPAIGNS", path: "/campaigns" },
    { label: "PROGRAMS", path: "/programs" },
    { label: "CONTACT US", path: "/contact" },
  ];
  const [openNav, setOpenNav] = useState(false);

  const handleDrawerClose = () => {
    setOpenNav(false);
  };

  return (
    <React.Fragment>
      <Drawer anchor="top" open={openNav} onClose={handleDrawerClose}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {pages.map((page, index) => (
            <ListItemButton
              onClick={handleDrawerClose}
              key={index}
              component={NavLink}
              to={page.path}
              sx={{
                color: "#FF0000", // Replace with your desired color
                textDecoration: "none", // Remove underline if desired
              }}
            >
              <ListItemIcon>
                <ListItemText>{page.label}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto", color: "#1F788C" }}
        onClick={() => setOpenNav(!openNav)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default NavBarMob;
