import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ExamesListagem from "../pages/examesListagem";
import ClientesListagem from "../pages/clientesListagem";
import AgendamentosListagem from "../pages/agendamentosListagem.js";
import Home from "../pages/home";
import EdicaoAgenda from "../pages/edicaoAgenda";
import clienteAlteracao from "../pages/clienteAlteracao";
import ClienteNovo from "../pages/clienteNovo";

const routes = [
  {
    path: "/agenda",
    component: AgendamentosListagem,
  },
  {
    path: "/agendamento/edicao",
    component: EdicaoAgenda,
    exact: true,
  },
  {
    path: "/edicao/cliente",
    component: clienteAlteracao,
  },
  {
    path: "/novo/cliente",
    component: ClienteNovo,
  },
  {
    path: "/listagem/clientes",
    component: ClientesListagem,
  },
  {
    path: "/exames",
    component: ExamesListagem,
  },
  {
    path: "/",
    component: Home,
    // TODO: colocar exact após criação lógica  e pág de erro.
  },
];

export default function Routes() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
      </Switch>
    </Router>
  );
}
