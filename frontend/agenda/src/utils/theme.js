import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    common: { black: "#000", white: "#fff" },
    background: { paper: "#fff", default: "#fafafa" },
    primary: {
      light: "#7986cb",
      main: "rgba(86, 117, 220, 1)",
      dark: "#303f9f",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff4081",
      main: "rgba(104, 30, 58, 1)",
      dark: "#c51162",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },

  typography: {
    fontFamily: ["Roboto"],
    h2: {
      fontSize: "min(48px, 7vw)",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "32px",
      color: "#000000",
    },
    h3: {
      fontSize: "min(32px, 6vw)",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "24px",
      color: "#000000",
    },

    h4: {
      fontSize: "min(24px, 5vw)",
      fontStyle: "normal",
      fontWeight: "normal",
      lineHeight: "24px",
      color: "#000000",
    },

    h5: {
      fontSize: "min(18px, 4vw)",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "24px",
      color: "#000000",
    },

    body1: {
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: "normal",
      lineHeight: "24px",
      color: "#000000",
    },

    body2: {
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "normal",
      lineHeight: "24px",
      color: "#9E9E9E",
    },
  },
});
