import Home from "../pages/Home";
import Clients from "../pages/Clients";
import ClientRegister from "../pages/Clients/Register";
import Exams from "../pages/Exams";
import ExamsRegister from "../pages/Exams/Register"; 
import Schedules from "../pages/Schedules";
import ScheduleRegister from "../pages/Schedules/Register";

export const routes = [
  { path: "/", component: Home, exact: true },
  { path: "/agendamentos", component: Schedules, exact: true },
  { path: "/agendamentos/cadastrar", component: ScheduleRegister, exact: true },
  { path: "/clientes", component: Clients, exact: true },
  { path: "/clientes/cadastrar", component: ClientRegister, exact: true },
  { path: "/exames", component: Exams, exact: true },
  { path: "/exames/cadastrar", component: ExamsRegister, exact: true },
];