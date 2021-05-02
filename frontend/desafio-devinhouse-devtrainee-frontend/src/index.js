import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { criarServidor } from "./services/mirage-server";

const ambiente = process.env.NODE_ENV;
if (ambiente !== "production") {
  criarServidor({ environment: ambiente });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
