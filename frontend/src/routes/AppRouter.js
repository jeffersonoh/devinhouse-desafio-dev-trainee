import { makeStyles, Toolbar } from "@material-ui/core";
import { useState } from "react";
import { Route, Switch } from "react-router";
import Header from "../components/Header";
import MenuDrawer from "../components/MenuDrawer";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Agendamentos from "../pages/Agendamentos";
import Clientes from "../pages/Clientes";
import Exames from "../pages/Exames";
import Home from "../pages/Home";
import NovoAgendamento from "../pages/NovoAgendamento";

const useStyles = makeStyles((theme) => ({
  main: {
    [theme.breakpoints.up('xs')]: {
      flexGrow: 1,
      padding: theme.spacing(2),
      paddingTop: theme.spacing(4)
    },
    [theme.breakpoints.up('md')]: {
      flexGrow: 1,
      padding: theme.spacing(6),
    },
  },
}));

const AppRouter = () => {
  const { width } = useWindowDimensions();

  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(width <= 575 ? false : true);

  return (
    <>
      <Header onToggleMenu={() => setOpenMenu((prevOpenMenu) => !prevOpenMenu)} />
      <MenuDrawer open={openMenu} />
      <div className={classes.main}>
        <Toolbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/clientes" component={Clientes} />
          <Route path="/exames" component={Exames} />
          <Route exact path="/agendamentos" component={Agendamentos} />
          <Route path="/agendamentos/criar" component={NovoAgendamento} />
          <Route path="/agendamentos/:id/editar" component={NovoAgendamento} />
        </Switch>
      </div>
    </>
  );
};

export default AppRouter;
