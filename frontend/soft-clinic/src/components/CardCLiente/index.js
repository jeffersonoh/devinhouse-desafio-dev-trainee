import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import UseStyles from "./UseStyles";
import ClienteService from "../../services/ClienteService";

export default function index(props) {
  const classes = UseStyles();
  const { item, titulo, cpf, modal, buscaClientes, showToastInfo, showToastWarning } = props;

  const excluirCliente = async () => {
    try{
      await ClienteService.excluir(item.id);
      buscaClientes();
      showToastInfo()
    } catch (error) {
      showToastWarning()
    }
  };

  return (
    <Grid item xs={12} sm={12} md={4} lg={4} xl={6}>
      <Card key={index} className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {titulo}
          </Typography>
          <Typography variant="h5" component="h2">
            {item.nome}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {item.dataDeNascimento}
          </Typography>
          <Typography variant="body2" component="p">
            {cpf}
            <br />
            {item.cpf}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            className={classes.button}
            variant="contained"
            startIcon={<DeleteIcon />}
            onClick={excluirCliente}
          >
            Delete
          </Button>
          {modal}
        </CardActions>
      </Card>
    </Grid>
  );
}
