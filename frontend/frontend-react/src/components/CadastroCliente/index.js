import React, { useEffect, useState } from "react";

import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { cpfMask } from "../../utils/cpfMask";

import { InputText } from "../../components/InputText";
import {Botao} from "../Button";
import theme from "./CadastroCliente.style";
import RequestBackendCliente from "../../services/ClienteRequest";
import { useContextLogin } from "../../utils/contextLogin";

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
  const { usuarioState: {cpf, loginStatus} } = useContextLogin();
  const {
    titulo,
    labelNome,
    labelCpf,
    labelNascimento,
    valueNome,
    valueNascimento,
    showDeleteButton,
    closeModal,
  } = props;
  const classes = useStyles();
  const [stateCpf, setStateCpf] = useState("");
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  const handlePost = async (cpf) => {
    const [ano, mes, dia] = dataNascimento.split("-");

    await RequestBackendCliente.postCliente({
      cpf: cpf,
      nome: nome,
      /* dataNascimento: `${dia}/${mes}/${ano}`, */
      dataNascimento: dataNascimento
    });
    setNome("");
    setDataNascimento("");
    closeModal();
  };

  const handlePut = async () => {
    await RequestBackendCliente.putCliente(cpf, {
      cpf: cpf,
      nome: nome,
      dataNascimento: dataNascimento
    });
    setNome("");
    setDataNascimento("");
  };

  const handleDelete = async () => {
    await RequestBackendCliente.deleteClientePorCpf(cpf);
  };

  const handleCpf = (e) => {
    const { value } = e.target;
    setStateCpf(cpfMask(value));
  };

  useEffect(() => {
    if (valueNome !== undefined) {
      setNome(valueNome);
    }
    if (valueNascimento !== undefined) {
      setDataNascimento(valueNascimento);
    }
  }, [valueNome, valueNascimento]);

  return (
    <Box className={classes.boxExterior}>
      <Box className={classes.boxInterior} component={Paper} elevation={2}>
        <Typography variant="h6">{titulo}</Typography>
        <Box className={classes.boxForms}>
          {loginStatus === false ?
          <InputText
            label={labelCpf}
            value={stateCpf}
            handlefunction={(e) => handleCpf(e)}
          />
          :
          <InputText
            label={labelCpf}
            value={cpf}
            handlefunction={(e) => handleCpf(e)}
          />
        }
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
          {showDeleteButton === true ? (
            <>
            <Box className={classes.botao}>
              <Botao text="Atualizar" onclick={() => handlePut()} />{" "}
              <Botao text="Deletar Perfil" onclick={() => handleDelete()} />{" "}
            </Box>
            </>
          ) : (
            <Botao text="Enviar" onclick={() => handlePost(stateCpf)} />
          )}
      </Box>
    </Box>
  );
};
