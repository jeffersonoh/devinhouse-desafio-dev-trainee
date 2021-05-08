import React from "react";
import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core";

import { Botao } from "../../../components/Button";
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
      {listagem?.map((listagem) => (
        <Grid
          className={classes.gridPaper}
          component={Paper}
          elevation={3}
          key={listagem.idAgendamento}
          style={{ display: "flex" }}
        >
          <Grid container>
            <Grid item className={classes.gridItem}>
              <Typography>Exame: {listagem.exame.nome}</Typography>
              <Typography>Data do exame: {listagem.data}</Typography>
              <Typography>Horário: {listagem.horario}</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "50%",
              justifyContent: "space-evenly",
            }}
          >
            <Botao
              text="Editar"
              tamanho="small"
              fontsize="13px"
              onclick={() =>
                onClickEditButton(
                  listagem.idAgendamento,
                  listagem.exame.nome,
                  listagem.data,
                  listagem.horario
                )
              }
            />
            <Botao
              text="Excluir"
              tamanho="small"
              fontsize="13px"
              onclick={() => onClickDeleteButton(listagem.idAgendamento)}
            />
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};
