import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#3081C2',
    },
    background: {
      default: '#F7F9F9',
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#F7F9F9",
        },
      },
    },
  },
});

function GlobalThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default GlobalThemeProvider;
