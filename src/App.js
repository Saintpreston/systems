import React, { useState, useMemo } from "react";
import NavBar from "./features/navigation/NavBar";
import Home from "./features/static/Home";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { createTheme } from "@mui/material";
import getDesignTokens from "./theme";
import {Card, Typography} from "@mui/material";

const App = () => {
  const [mode, setMode] = useState("dark");
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  useMemo(() => {
    if (darkMode) {
      setMode("dark");
      console.log('here')
    } else {
      setMode("light");
    }
  }, [darkMode]);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
    
      <Home />
      <Card><Typography>Hello</Typography>

</Card>
    </ThemeProvider>
  );
};

export default App;
