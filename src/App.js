import React from 'react';
import NavBar from './features/navigation/NavBar';
import Home from './features/static/Home'
import {ThemeProvider} from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import {theme} from './theme'



const App = () => {
  

 
 
  return (
    <>
    <ThemeProvider theme={theme} >
      <CssBaseline/>
       <NavBar  />
       
     <Home/>
    
     </ThemeProvider>
    </>
  );
}

export default App;
