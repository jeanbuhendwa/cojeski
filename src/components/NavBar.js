import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  useMediaQuery,
  useTheme,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import NavBarMob from "./NavBarMob";
import logo from "../Img/logo.png";
const NavBar = () => {
  const pages = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/about" },
    { label: "CAMPAIGNS", path: "/campaigns" },
    { label: "PROGRAMS", path: "/programs" },
    { label: "CONTACT US", path: "/contact" },
  ];
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const customTheme = createTheme({
    palette: {
      primary: {
        main: "#1F788C",
      },
      secondary: {
        main: "#1F788C",
      },
    },
  });
  const logoLink = () => {
    setValue(0);
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={customTheme}>
        <AppBar>
          <Toolbar className="navBar">
            <NavLink to="/" className="logo-container" onClick={logoLink}>
              <div className="logo-box">
                <img src={logo} alt="logo" className="logo-img" />
                <span>Together As One</span>
              </div>
              <span>COJESKI | NORTH-KIVU</span>
            </NavLink>
            {isMatch ? (
              <>
                <NavBarMob />
              </>
            ) : (
              <Tabs
                sx={{
                  marginLeft: "auto",
                }}
                textColor="primary"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
              >
                {pages.map((page, index) => (
                  <Tab
                    key={index}
                    label={page.label}
                    component={NavLink}
                    to={page.path}
                  />
                ))}
              </Tabs>
            )}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default NavBar;
