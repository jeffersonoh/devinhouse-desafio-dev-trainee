import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./routes";

import reportWebVitals from "./reportWebVitals";
// import { Router } from "@material-ui/icons";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import theme from "./utils/theme";
import { criarServidor } from "./services/mirage-server";

const ambiente = process.env.NODE_ENV;
if (ambiente !== "production") {
  criarServidor({ environment: ambiente });
}
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Router />
  </MuiThemeProvider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
