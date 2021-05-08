import HomePage from "../pages/HomePage";
import Appointments from "../pages/Appointments";
import Clients from "../pages/Clients";
import Exams from "../pages/Exams";


const routes = [
    {
        path: '/',
        component: HomePage,
        exact: true
    },
    {
        path: "/Agendamentos",
        component: Appointments,
        exact: true
    },
    {
        path: "/Exames",
        component: Exams,
        exact: true
    },
    {
        path: "/Clientes",
        component: Clients,
    },
  ]

export default routes;