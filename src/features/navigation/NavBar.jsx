import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import NavLink from "./NavLink.styled";
import { LightMode, DarkMode } from "@mui/icons-material";
import {theme} from '../../theme'

const NavBar = ({toggleTheme, themeMode}) => {

  const {mode} = theme.palette
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  
  
  return (
    <AppBar>
      <Toolbar>
        {isDesktop ? (
          <>
            <Typography variant='h5'>Systems</Typography>
            <NavLink sx={{ marginLeft: "auto" }} emoji="🧘🏽‍♂️">
              Self
            </NavLink>
            <NavLink emoji="🏙">City</NavLink>
            <NavLink emoji="🔮">Future</NavLink>
            <IconButton
            onClick={toggleTheme}
            >
              {mode === 'light' ? <LightMode/> :
              <DarkMode/>}
            </IconButton>{" "}
          </>
        ) : (
          <DrawerComp />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
