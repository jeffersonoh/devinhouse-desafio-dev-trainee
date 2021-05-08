import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { LoginProvider } from "./utils/login.context";
import { ExameProvider } from "./utils/exameSelect.context";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CadastrarCliente from "./pages/Cliente/CadastrarCliente";
import AtualizarCliente from "./pages/Cliente/AtualizarCliente";
import ListagemCliente from "./pages/Cliente/ListagemCliente";
import ListarAgendamento from "./pages/Agendamento/ListarAgendamento";
import CadastrarAgendamento from "./pages/Agendamento/CadastrarAgendamento";

function App() {
  return (
    <Router>
      <>
        <ToastContainer />
      </>
      <LoginProvider>
        <Header />
        <ExameProvider>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/cadastro">
              <CadastrarCliente />
            </Route>
            <Route exact path="/cliente">
              <AtualizarCliente />
            </Route>
            <Route exact path="/lista-cliente">
              <ListagemCliente />
            </Route>
            <Route exact path="/agendamentos">
              <ListarAgendamento />
            </Route>
            <Route exact path="/agendar">
              <CadastrarAgendamento />
            </Route>
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </ExameProvider>
      </LoginProvider>
    </Router>
  );
}

export default App;
