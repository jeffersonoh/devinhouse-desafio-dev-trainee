import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./route";
import Header from "./components/Header";
import PaginaInicial from "./pages/PaginaInicial";
import Clientes from "./pages/Clientes";
import Exames from "./pages/Exames";
import Agendamentos from "./pages/Agendamentos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <Router>
    <Header/>
      <Switch>
        <Route path={"/"} component={PaginaInicial} exact/> 
        <Route path={"/clientes"} component={Clientes} exact/> 
        <Route path={"/exames"} component={Exames} exact/> 
        <Route path={"/agendamentos"} component={Agendamentos} exact/> 

      </Switch>
      {/* <PaginaInicial /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
