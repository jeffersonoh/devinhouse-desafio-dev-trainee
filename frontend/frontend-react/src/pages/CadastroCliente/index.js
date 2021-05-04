import React, { useState } from "react";

import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {cpfMask} from "./maks";

import { InputText } from "../../components/InputText";
import Botao from "../../components/Button/Botao";
import theme from "./CadastroCliente.style";
import RequestBackendCliente from "../../utils/ClienteRequest";

const useStyles = makeStyles({
  boxExterior: {
    ...theme.boxExterior,
  },
  boxInterior: {
    ...theme.boxInterior,
  },
  boxForms: {
    ...theme.boxForms,
  },
  botao: {
    ...theme.botao,
  },
});

export const CadastroCliente = () => {
  const classes = useStyles();
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  
  const handlePost = () => {
    const [ano, mes, dia] = dataNascimento.split("-");

    RequestBackendCliente.postCliente({
      cpf: cpf,
      nome: nome,
      dataNascimento: `${dia}/${mes}/${ano}`,
    });  
    setCpf("");
    setNome("");
    setDataNascimento("");
  };

  const handleCpf = (e) => {
    const { value } = e.target;
    setCpf(cpfMask(value))
  };

  return (
    <Box className={classes.boxExterior}>
      <Box className={classes.boxInterior} component={Paper} elevation={2}>
        <Typography variant="h6">Cadastro de Cliente</Typography>
        <Box className={classes.boxForms}>
        <InputText
            label="Digite seu CPF"
            value={cpf}
            handlefunction={(e) => handleCpf(e)}
          />
          <InputText
            label="Digite seu nome"
            value={nome}
            handlefunction={(e) => setNome(e.target.value)}
          />
          <InputText
            label="Sua data de nascimento"
            value={dataNascimento}
            handlefunction={(e) => setDataNascimento(e.target.value)}
            type="date"
          />
        </Box>
        <Box className={classes.botao}>
          <Botao text="Enviar" onclick={() => handlePost()} />
        </Box>
      </Box>
    </Box>
  );
};
