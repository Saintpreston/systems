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
import {  useTheme } from '@emotion/react'

const NavBar = () => {

  const theme = useTheme()
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
           
            >
              <LightMode/>
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
