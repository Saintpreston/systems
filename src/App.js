import React, { useMemo } from "react";
import NavBar from "./features/navigation/NavBar";
import Home from "./features/static/Home";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, createTheme,  useMediaQuery } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import getDesignTokens from "./theme";
import { toggleTheme} from './features/navigation/themeSlice'
import {
  Routes,
  Route,
} from "react-router-dom";
import Self from './features/self/Self'
import Future from "./features/future/Future";
import City from "./features/city/City";

const App = () => {
  const dispatch = useDispatch()
  const themeMode = useSelector((state) => state.theme.mode);
  const preferedMode = useMediaQuery("(prefers-color-scheme: dark)") ? 'dark' : 'light'
  

  useMemo(()=>{
    console.log('you switched your preference')
    if (themeMode === preferedMode )return;
    dispatch(toggleTheme(preferedMode));
  }
  , [preferedMode,dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

 

const theme = createTheme(getDesignTokens(themeMode)); 
    
  console.log('render')
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Routes>
      <Route path='/'  element={<Home />} />
      <Route path='/self' element={<Self/>} />
      <Route path='/city' element={<City/>} />
      <Route path='/future' element={<Future/>} />
      </Routes>  
    </ThemeProvider>
  );
};

export default App;
