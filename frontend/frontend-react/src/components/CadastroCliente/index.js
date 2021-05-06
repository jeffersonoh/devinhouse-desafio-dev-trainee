import React, { useEffect, useState } from "react";

import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { cpfMask } from "../../utils/cpfMask";

import { InputText } from "../../components/InputText";
import {Botao} from "../Button";
import theme from "./CadastroCliente.style";
import RequestBackendCliente from "../../services/ClienteRequest";

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

export const CadastroCliente = (props) => {
  const {
    titulo,
    labelNome,
    labelCpf,
    labelNascimento,
    valueCpf,
    valueNome,
    valueNascimento,
    showDeleteButton,
  } = props;
  const classes = useStyles();
  const [stateCpf, setStateCpf] = useState("");
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  const handlePost = async () => {
    const [ano, mes, dia] = dataNascimento.split("-");

    await RequestBackendCliente.postCliente({
      cpf: stateCpf,
      nome: nome,
      dataNascimento: `${dia}/${mes}/${ano}`,
    });
    setStateCpf("");
    setNome("");
    setDataNascimento("");
  };

  const handlePut = async (cpf) => {
    
    await RequestBackendCliente.putCliente("555",{
      cpf: stateCpf,
      nome: nome,
      dataNascimento: dataNascimento
    });
    setStateCpf("");
    setNome("");
    setDataNascimento("");
  };

  const handleDelete = async (cpf) => {
    await RequestBackendCliente.deleteClientePorCpf("555");
    setStateCpf("");
    setNome("");
    setDataNascimento("");
  };

  const handleCpf = (e) => {
    const { value } = e.target;
    setStateCpf(cpfMask(value));
  };

  useEffect(() => {
    if (valueCpf !== undefined) {
      setStateCpf(valueCpf);
    } 
    if (valueNome !== undefined) {
      setNome(valueNome);
    }
    if (valueNascimento !== undefined) {
      setDataNascimento(valueNascimento);
    }
  }, [valueCpf, valueNome, valueNascimento]);

  return (
    <Box className={classes.boxExterior}>
      <Box className={classes.boxInterior} component={Paper} elevation={2}>
        <Typography variant="h6">{titulo}</Typography>
        <Box className={classes.boxForms}>
          <InputText
            label={labelCpf}
            value={stateCpf}
            handlefunction={(e) => handleCpf(e)}
          />
          <InputText
            label={labelNome}
            value={nome}
            handlefunction={(e) => setNome(e.target.value)}
          />
          <InputText
            label={labelNascimento}
            value={dataNascimento}
            handlefunction={(e) => setDataNascimento(e.target.value)}
            type="date"
          />
        </Box>
        {/* <Box className={classes.botao}> */}
          {showDeleteButton === true ? (
            <>
            <Box className={classes.botao}>
              <Botao text="Atualizar" onclick={() => handlePut()} />{" "}
              <Botao text="Deletar Perfil" onclick={() => handleDelete()} />{" "}
            </Box>
            </>
          ) : (
            <Botao text="Enviar" onclick={() => handlePost()} />
          )}
        {/* </Box> */}
      </Box>
    </Box>
  );
};
