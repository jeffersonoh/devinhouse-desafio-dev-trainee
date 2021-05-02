import { makeStyles, Toolbar } from "@material-ui/core";
import { useState } from "react";
import { Route, Switch } from "react-router";
import Header from "../components/Header";
import MenuDrawer from "../components/MenuDrawer";
import Agendamentos from "../pages/Agendamentos";
import Clientes from "../pages/Clientes";
import Exames from "../pages/Exames";

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
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <>
      <Header onToggleMenu={() => setOpenMenu((prevOpenMenu) => !prevOpenMenu)} />
      <MenuDrawer open={openMenu} />
      <div className={classes.main}>
        <Toolbar />
        <Switch>
          <Route path="/clientes" component={Clientes} />
          <Route path="/exames" component={Exames} />
          <Route path="/agendamentos" component={Agendamentos} />
        </Switch>
      </div>
    </>
  );
};

export default AppRouter;
