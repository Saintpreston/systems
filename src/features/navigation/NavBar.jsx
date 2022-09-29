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
import { useSelector, useDispatch } from "react-redux";
import {toggleTheme} from './themeSlice'
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'



const NavBar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const selectThemeMode = useSelector((state) => state.theme.mode);
  
  // const LinkBehavior = React.forwardRef((props, ref) => (
  //   <RouterLink ref={ref} to="/" {...props} role={undefined} />
  // ));


  return (
    <AppBar>
      <Toolbar>
        {isDesktop ? (
          <>
            <Typography variant='h5'>Systems</Typography>
         <RouterLink to='/self' >  <NavLink sx={{ marginLeft: "auto" }} emoji="🧘🏽‍♂️">
              Self
           </NavLink></RouterLink>
           <RouterLink to='/city' ><NavLink >City</NavLink></RouterLink>
           <RouterLink to='/future' ><NavLink >Future</NavLink></RouterLink>
            <IconButton
            onClick={()=>dispatch(toggleTheme(selectThemeMode === 'light' ? 'dark' : 'light'))}
            >
              {selectThemeMode === 'light' ? <LightMode/> : <DarkMode />}
             
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
