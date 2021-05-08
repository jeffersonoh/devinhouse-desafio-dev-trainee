import { Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";

toast.configure()
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function MyApp() {
  const classes = useStyles();

  return (
    <>
    <ToastContainer />
      <CssBaseline />
      <main>
        <Header />
        <Switch>
          <div className={classes.root}>
            <Grid
              container
              spacing={2}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Route path="/clientes" component={Clientes} exact />
              <Route path="/exames" component={Exames} exact />
              <Route path="/agendamentos" component={Agendamentos} exact />
            </Grid>
          </div>
        </Switch>
      </main>
    </>
  );
}
