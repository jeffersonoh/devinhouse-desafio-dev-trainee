import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import Botao from "../Button/Botao";

import theme from "./listagem.style";

const useStyle = makeStyles({
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
export const Listagem = (props) => {
  const classes = useStyle();
  const { listagem, onClickEditButton, onClickDeleteButton } = props;

  return (
    <Box className={classes.boxExterior}>
      {listagem?.map((listaAgendamento) => (
          <Grid
            className={classes.gridPaper}
            component={Paper}
            elevation={3}
            key={listaAgendamento.idAgendamento}
            style={{display: "flex"}}
          >
            <Grid container>
              <Grid item className={classes.gridItem}>
                <Typography>Exame: {listaAgendamento.exame.nome}</Typography>
                <Typography>Data do exame: {listaAgendamento.data}</Typography>
                <Typography>Horário: {listaAgendamento.horario}</Typography>
              </Grid>
            </Grid>
            <Grid container style={{display:"flex", flexDirection:"column", alignItems:"center", width: "50%", justifyContent: "space-evenly"}}>
              <Botao 
              text="Editar" 
              tamanho="small" 
              fontsize="13px" 
              onclick={() => onClickEditButton(
                listaAgendamento.idAgendamento,
                listaAgendamento.exame.nome,
                listaAgendamento.data,
                listaAgendamento.horario
                )}/>
              <Botao 
              text="Excluir"tamanho="small" 
              fontsize="13px" 
              onclick={() => onClickDeleteButton(
                listaAgendamento.idAgendamento,
              )}/>
            </Grid>
          </Grid>
      ))}
    </Box>
  );
};
