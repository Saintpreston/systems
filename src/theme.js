import { pink } from "@mui/material/colors";

export const darkPalette = {
  primary: {
    main: pink[500],
  },
  secondary: {
    main: "#f50057",
  },
  background: {
    default: "#101010",
    paper: "#202020",
  },
};

export const lightPalette = {
  primary: {
    main: pink[500],
  },
};

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark" ? darkPalette : lightPalette),
  },
  typography: {
    body1: {
      lineHeight: 2,
    },
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
      defaultProps: {
        elevation: 0,
        color: "transparent",
      },
      styleOverrides: {
        root: {
          backdropFilter: "blur(5px)",
          borderBottom: "1px solid",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "space-between",
        },
      },
    },
    MuiIconButton: {
      defaultProps: {},
      styleOverrides: {
        root: {
          border: "solid",
          borderWidth: "2px",
          borderRadius: "8px",
        },
      },
    },
  },
});

export default getDesignTokens;
