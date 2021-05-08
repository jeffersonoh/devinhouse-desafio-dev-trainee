import React from "react";
import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import theme from "./listagem.style";

const useStyles = makeStyles({
  boxCenter: {
    ...theme.boxCenter
  },
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

const ListagemClientes = (props) => {
  const { listagem } = props;
  const classes = useStyles();
  return (
    <Box className={classes.boxCenter}>
      <Box className={classes.boxExterior}>
        {listagem?.map((listagem) => (
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
        ))}
      </Box>
    </Box>
  );
};

export default ListagemClientes;
