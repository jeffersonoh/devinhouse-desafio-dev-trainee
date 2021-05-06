import React from "react";
import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import theme from "./listagem.style";
const useStyles = makeStyles({
  boxExterior: {
    ...theme.boxExterior,
  },
  gridPaper: {
    ...theme.gridPaper,
  },
  gridItem: {
    ...theme.gridItem,
  },
});

export default function ListagemExames(props) {
  const { listagem } = props;
  const classes = useStyles();
  return (
    <Box className={classes.boxExterior}>
      {listagem?.map((listagem) => (
        <Grid
          className={classes.gridPaper}
          component={Paper}
          elevation={3}
          key={listagem.idExame}
          style={{ display: "flex" }}
        >
          <Grid container>
            <Grid item className={classes.gridItem}>
              <Typography>Id do Exame: {listagem.idExame}</Typography>
              <Typography>Nome do Exame: {listagem.nome}</Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}
