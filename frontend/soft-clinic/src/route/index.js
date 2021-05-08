import PaginaInicial from "../pages/PaginaInicial";
import Clientes from "../pages/Clientes";
import Exames from "../pages/Exames";
import Agendamentos from "../pages/Agendamentos";

const routes = [
  {
    path: "/",
    component: PaginaInicial,
    exact: true,
  },
  {
    path: "/clientes",
    component: Clientes,
    exact: true,
  },
  {
    path: "/exames",
    component: Exames,
    exact: true,
  },
  {
    path: "/agendamentos",
    component: Agendamentos,
    exact: true,
  },
];

export default routes;