import React, { useState, useEffect } from "react";
import { Box, Paper, Typography } from "@material-ui/core";

import RequestBackendExame from "../../utils/ExameRequest";
import BarraPrincipal from "../../components/Header/BarraPrincipal";
import { DropdownExames } from "./DropdownExames";
import { makeStyles } from "@material-ui/core/styles";
import theme from "./Agendamento.style";

const useStyles = makeStyles ({
  boxPaper: {
    ...theme.boxPaper
  }
});

export function Agendamento() {
  const classes = useStyles();

  const [listaExames, setListaExames] = useState([]);
  useEffect(() => {
    const handleLista = async () => {
      const listaExames = await RequestBackendExame.getTodosExames();
      setListaExames(listaExames);
    };
    handleLista();
  }, []);

  return (
    <>
      <BarraPrincipal />
        <Paper className={classes.boxPaper}>
          <Typography variant="h6">Realizar Agendamento</Typography>
          <Box>
            <Typography variant="body2">Selecione um exame</Typography>
            <DropdownExames listaExames={listaExames} />
          </Box>
          <Typography>Selecione uma data</Typography>
          <Typography>Selecione um horário disponível</Typography>
        </Paper>
    </>
  );
}
