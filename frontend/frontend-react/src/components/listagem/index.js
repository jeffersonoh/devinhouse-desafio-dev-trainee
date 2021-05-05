import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import { InputText } from "../InputText";

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
  const { listagem } = props;

  return (
    <Box className={classes.boxExterior}>
      {listagem?.map((listaAgendamento) => (
        <Grid
          className={classes.gridPaper}
          component={Paper}
          elevation={3}
          key={listaAgendamento.idAgendamento}
        >
          <Grid container>
            <Grid item className={classes.gridItem}>
              <Typography>Exame: {listaAgendamento.exame.nome}</Typography>
              
                <Typography>Data do exame: {listaAgendamento.data}</Typography>
                <InputText
                  disable={true}
                  type="date"
                  value={listaAgendamento.data}
                />
           
              <Typography>Horário: {listaAgendamento.horario}</Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};
