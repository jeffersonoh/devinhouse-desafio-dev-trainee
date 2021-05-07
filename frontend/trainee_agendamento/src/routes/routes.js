import Home from "../pages/Home";
import Clients from "../pages/Clients";
import ClientRegister from "../pages/Clients/Register";
import ClientUpdate from "../pages/Clients/Update";
import Exams from "../pages/Exams";
import ExamsRegister from "../pages/Exams/Register"; 
import Schedules from "../pages/Schedules";
import ScheduleRegister from "../pages/Schedules/Register";
import ScheduleUpdate from "../pages/Schedules/Update";
import SearchByCpf from "../components/SearchByCpf";

export const routes = [
  { path: "/", component: Home, exact: true },
  { path: "/agendamentos", component: Schedules, exact: true },
  { path: "/agendamentos/cadastrar", component: ScheduleRegister, exact: true },
  { path: "/agendamentos/atualizar", component: ScheduleUpdate, exact: true },
  { path: "/clientes", component: Clients, exact: true },
  { path: "/clientes/cadastrar", component: ClientRegister, exact: true },
  { path: "/clientes/atualizar", component: ClientUpdate, exact: true },
  { path: "/clientes/consultar", component: SearchByCpf, exact: true },
  { path: "/exames", component: Exams, exact: true },
  { path: "/exames/cadastrar", component: ExamsRegister, exact: true },
];