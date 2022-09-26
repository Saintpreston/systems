import { createTheme } from "@mui/material";

const pseudoBlack = '#1F1F1F'

const darkPalette = {
  primary: {
    main: "#fff ",
  },
  background: {
    default: pseudoBlack,
    paper: "#0B1929",
  },
  text: {
    primary: "#F9FBFF",
    secondary: "#EBFF00",
  },
};
const lightPalette = {
  primary: {
    main: "#4200FF",
  },
  background: {
    default: "#FFFFFF",
    paper: "#FFFFFF",
  },
  text: {
    primary: pseudoBlack,
    secondary: "#BC00FF",
  },
};



export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark" ? darkPalette : lightPalette),
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
        color: 'transparent',
        elevation: 0
      },
      styleOverrides: {
        root: {
          borderBottom: '1px solid',
          borderColor: 'primary.main'
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

export let theme = createTheme(getDesignTokens());


