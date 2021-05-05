import React, { useState, useEffect } from "react";

import { Box, Drawer, makeStyles, Typography } from "@material-ui/core";

import RequestBackendCliente from "../../utils/ClienteRequest";
import {Listagem} from "../../components/listagem";
import {CustomModal} from "../../components/CustomModal"
import BarraPrincipal from "../../components/Header/BarraPrincipal";
import Botao from "../../components/Button/Botao";
import theme from "./AreaPrincipal.style";
import {CadastroCliente} from "../CadastroCliente";
import { Agendamento } from "../Agendamento";

const useStyles = makeStyles({
  agendamentoList: {
    ...theme.agendamentoSpacing,
  },
  modalCliente: {
    ...theme.modalCliente,
  },
  modalBox: {
    ...theme.modalBox
  },
  modalAgendamento: {
    ...theme.modalAgendamento
  }
});

export default function AreaPrincipalCliente() {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(false);
  const [openModalPerfil, setOpenModalPerfil] = useState(false);
  const [openModalAgendamento, setOpenModalAgendamento] = useState(false);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [nascimento, setNascimento] = useState("");
  const handleOpenMenu = () => {
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleOpenModalPerfil = async (cpf) => {
    const infosCliente = await RequestBackendCliente.getClientePorCpf("555");
    setNome(infosCliente.nome);
    setCpf(infosCliente.cpf);
    setNascimento(infosCliente.dataNascimento)
    setOpenModalPerfil(true);
  };
  
  const handleCloseModalPerfil = () => {
    setOpenModalPerfil(false);
    setOpenMenu(false);
  };

  const [listaAgendamento, setListaAgendamento] = useState([]);

  useEffect(() => {
    const handleLista = async () => {
      const listaAgendamentoDoCliente = await RequestBackendCliente.getClienteAgendamentoPorCpf("555");
      setListaAgendamento(listaAgendamentoDoCliente);
    };
    handleLista();
  },[]);

  const handleOpenModalAgendamento = () => {
    setOpenModalAgendamento(true)
  }
  const handleCloseModalAgendamento = () => {
    setOpenModalAgendamento(false)
  }
  return (
    <>
      <BarraPrincipal drawyerEvent={handleOpenMenu} />
      <Drawer anchor="right" open={openMenu} onClose={handleCloseMenu}>
        <Botao text="Realizar agendamento" variante="text" cor="menuLateral" onclick={() => handleOpenModalAgendamento()}/>
        <Botao text="Editar cadastro" variante="text" cor="menuLateral" onclick={() => handleOpenModalPerfil()}/>
        <Botao text="Logout" variante="text" cor="menuLateral" />
      </Drawer>
      <Box className={classes.agendamentoList}>
        <Typography variant="h4">Meus exames agendados</Typography>
        <Typography variant="body1">(Clique num exame para editar)</Typography>
        <Listagem listagem={listaAgendamento}/>
      </Box>
      
      <CustomModal 
      text="teste" 
      classNameModal={classes.modalCliente}
      classNameBox={classes.modalBox}
      open={openModalPerfil} 
      onclose={() => handleCloseModalPerfil()}
      child={
      <CadastroCliente 
        titulo="Editar Perfil"
        labelCpf="Altere seu CPF"
        labelNome="Altere seu nome"
        labelNascimento="Altere sua data de nascimento"
        valueNome={nome}
        valueCpf={cpf}
        valueNascimento={nascimento}
        showDeleteButton={true}
      />}
      />

      <CustomModal
      open={openModalAgendamento}
      onclose={() => handleCloseModalAgendamento()}
      classNameModal={classes.modalAgendamento}
      classNameBox={classes.modalBox}
      child={
        <Agendamento 
        titulo="Realizar Agendamento"
        labelExame="Selecione um exame"
        labelData="Selecione uma Data"
        labelHorario="Selecione um horário"
        showDeleteButton={false}
        />
      }
      />
        
    </>
  );
}