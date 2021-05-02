import { makeStyles, Toolbar } from "@material-ui/core";
import { useState } from "react";
import { Route, Switch } from "react-router";
import Header from "../components/Header";
import MenuDrawer from "../components/MenuDrawer";
import Clientes from "../pages/Clientes";

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
        </Switch>
      </div>
    </>
  );
};

export default AppRouter;
