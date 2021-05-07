import { Grid, makeStyles, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import PageWrapper from "../../components/PageWrapper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <>
      <PageWrapper>
        <Header />
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={6}
        >
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Link to={{ pathname: "/exames" }}>EXAMES DISPONÍVEIS</Link>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Link to={{ pathname: "/listagem/clientes" }}>
                CLIENTES CADASTRADOS
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Link to={{ pathname: "/agenda" }}>EXAMES AGENDADOS</Link>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Link to={{ pathname: "/novo/cliente" }}>ADICIONAR CLIENTE</Link>
            </Paper>
          </Grid>
        </Grid>
      </PageWrapper>
    </>
  );
}

export default Home;
