import React from "react";
import theme from "./listagem.style";

import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core";

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

export default function ListagemCliente(props) {
  const { listagem } = props;
  const classes = useStyles();
  return (
    <Box className={classes.boxExterior}>
      <Grid
        className={classes.gridPaper}
        component={Paper}
        elevation={3}
        key={listagem.idCliente}
        style={{ display: "flex" }}
      >
        <Grid container>
          <Grid item className={classes.gridItem}>
            <Typography>Id do Cliente: {listagem.idCliente}</Typography>
            <Typography>CPF do Clientes: {listagem.cpf}</Typography>
            <Typography>Nome do Cliente: {listagem.nome}</Typography>
            <Typography>
              Data de Nascimento: {listagem.dataNascimento}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
