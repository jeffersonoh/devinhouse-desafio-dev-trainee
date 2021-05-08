import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import UseStyles from "./UseStyles";
import AgendamentoService from "../../services/AgendamentoService";

export default function index(props) {
  const classes = UseStyles();
  const { item, titulo, subtitulo, data, modal, buscaAgendamentos, showToastInfo } = props;

  const excluirAgendamento = async () => {
    await AgendamentoService.excluir(item.id);
    buscaAgendamentos();
    showToastInfo();
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
            {item.cliente.nome}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {subtitulo} {item.exame.nomeDoExame}
          </Typography>
          <Typography variant="body2" component="p">
            {data}
            <br />
            {item.dataEHoraDoAgendamento}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            className={classes.button}
            variant="contained"
            startIcon={<DeleteIcon />}
            onClick={excluirAgendamento}
          >
            Delete
          </Button>
          {modal}
        </CardActions>
      </Card>
    </Grid>
  );
}
