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

import { toast } from "react-toastify";

import ExameService from "../../services/ExameService";
import useStyles from "./useStyles";

toast.configure();
export default function CardExames(props) {
  const classes = useStyles();
  const { item, titulo, modal, buscaExames } = props;

  const excluirExame = async () => {
    await ExameService.excluir(item.id);
    buscaExames();
  };

  return (
    <Grid item xs={12} 
    sm={12}
    md={4}
    lg={4}
    xl={6}
    >
      <Card key={CardExames} className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {titulo}
          </Typography>
          <Typography variant="h5" component="h2">
            {item.nomeDoExame}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            className={classes.button}
            variant="contained"
            startIcon={<DeleteIcon />}
            onClick={excluirExame}
          >
            Delete
          </Button>
          {modal}
        </CardActions>
      </Card>
    </Grid>
  );
}
