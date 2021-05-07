import { Card, Grid, makeStyles } from "@material-ui/core";

import AgendamentoMenu from "../../../components/AgendamentoMenu";
import ExameMenu from "../../../components/ExameMenu";

const useStyle = makeStyles((theme) => ({
  grid: {
    margin: 5,
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  margin: {
    width: "40%",
    margin: 30,
    padding: 10,
  },
}));

export default function CadastrarCliente() {
  const classes = useStyle();
  return (
    <Grid
      className={classes.grid}
      container
      item
      direction="row"
    >
      <Grid className={classes.margin} item xs={5}>
        <AgendamentoMenu />
      </Grid>
      <Grid
        className={classes.margin}
        item
        component={Card}
        elevation={5}
        variant="outlined"
      >
        <ExameMenu />
      </Grid>
    </Grid>
  );
}
