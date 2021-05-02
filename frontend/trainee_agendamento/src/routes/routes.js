import Clients from "../pages/Clients";
import Exams from "../pages/Exams";
import Home from "../pages/Home";
import Schedules from "../pages/Schedules";

export const routes = [
  { path: "/", component: Home, exact: true },
  { path: "/agendamentos", component: Schedules, exact: true },
  { path: "/clientes", component: Clients, exact: true },
  { path: "/exames", component: Exams, exact: true },
];