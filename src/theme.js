import { blue, red } from '@mui/material/colors';


export const darkPalette = {
  primary: {
    main: "#fff ",
  },
  background: {
    default: '#1F1F1F',
    paper: "#0B1929",
  },
  text: {
    primary: blue[500],
    secondary: "#EBFF00",
  },
};
export const lightPalette = {
  primary: {
    main: "#4200FF",
  },
  background: {
    default: "#FFFFFF",
    paper: "#FFFFFF",
  },
  text: {
    primary: red[500],
    secondary: "#BC00FF",
  },
};



 const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark" ? darkPalette : lightPalette),
  },
  typography:{
      body1:{
        lineHeight: 2
      }
  },
  components: {
    MuiContainer: { 
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
        },
      },
    },

    MuiAppBar: {
      defaultProps:{
        elevation: 0,
        color: 'transparent'
      },
      styleOverrides: {
        root: {
          backdropFilter: 'blur(3px)',
          borderBottom: '1px solid',
          borderColor: 'black'
        }
      }
    },
    MuiToolbar:{
      styleOverrides:{
        root:{
         display: 'flex',
         justifyContent: 'space-between'
        }
      }
    },
    MuiIconButton: {
      defaultProps: {
      
      },
      styleOverrides: {
        root:{
          border: 'solid',
          borderWidth: '2px',
           borderColor: 'text.primary',
           borderRadius: '8px',
           color: 'text.primary'
        }
      }
    },
  },
});




export default getDesignTokens