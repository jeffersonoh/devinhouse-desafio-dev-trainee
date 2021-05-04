import React, { useState } from "react";

import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
  const [dataNascimento, setDataNascimento] = useState({});

  const handlePost = () => {
    RequestBackendCliente.postCliente({
      cpf: cpf,
      nome: nome,
      dataNascimento: dataNascimento,
    });
    setCpf("");
    setNome("");
    setDataNascimento("");
  };

  return (
    <Box className={classes.boxExterior}>
      <Box className={classes.boxInterior} component={Paper} elevation={2}>
        <Typography variant="h6" >Cadastro de Cliente</Typography>
        <Box className={classes.boxForms}>
          <InputText
            label="Digite seu CPF"
            value={cpf}
            handlefunction={(e) => setCpf(e.target.value)}
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
