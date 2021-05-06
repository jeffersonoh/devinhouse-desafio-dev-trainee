import React from "react";
import { Box, Paper, Typography, makeStyles } from "@material-ui/core";

import Botao from "../../../components/Button/Botao";
import { InputText } from "../../../components/InputText";
import theme from "./Pesquisa.style";

const useStyles = makeStyles({
  boxExterior: {
    ...theme.boxExterior,
  },
  boxInterior: {
    ...theme.boxInterior,
  },
  boxMargin: {
    ...theme.boxMargin,
  },
});

export function Pesquisa(props) {
  const { handleCpf, value, handlePesquisa } = props;
  const classes = useStyles();

  return (
    <Box className={classes.boxExterior}>
      <Box component={Paper} className={classes.boxInterior}>
        <Box className={classes.boxMargin}>
          <Typography variant="h6">Pesquise por um cliente</Typography>
          <InputText
            label="Digite um CPF"
            value={value}
            handlefunction={(e) => handleCpf(e)}
          />
        </Box>
        <Botao onclick={handlePesquisa} text="Pesquisar" />
      </Box>
    </Box>
  );
}
