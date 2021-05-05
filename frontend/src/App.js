import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { LoginProvider } from "./utils/login.context";
import { ExameProvider } from "./utils/exameSelect.context";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CadastrarCliente from "./pages/Cliente/CadastrarCliente";
import AtualizarCliente from "./pages/Cliente/AtualizarCliente";

function App() {
  return (
    <Router>
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
              <AtualizarCliente/>
            </Route>
            <Route>
              <Redirect to="/"/>
            </Route>
          </Switch>
          
        </ExameProvider>
      </LoginProvider>
    </Router>
  );
}

export default App;
