import React, { useState, useEffect } from "react";

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Box, Drawer, makeStyles, Typography, Card } from "@material-ui/core";

import { useContextLogin } from "../../utils/contextLogin";
import RequestBackendCliente from "../../services/ClienteRequest";
import RequestBasckendAgendamento from "../../services/AgendamentoRequest";
import { Listagem } from "./listagem";
import { CustomModal } from "../../components/CustomModal";
import { BarraPrincipal } from "../../components/Header";
import { Botao } from "../../components/Button";
import { CadastroCliente } from "../../components/CadastroCliente";
import { Agendamento } from "../../components/Agendamento";
import theme from "./AreaPrincipal.style";

const useStyles = makeStyles({
  agendamentoList: {
    ...theme.agendamentoSpacing,
  },
  modalCliente: {
    ...theme.modalCliente,
  },
  modalBox: {
    ...theme.modalBox,
  },
  modalAgendamento: {
    ...theme.modalAgendamento,
  },
});

export function AreaPrincipalCliente() {
  const classes = useStyles();
  const {
    usuarioState: { cpf, contextNome },
    logout,
  } = useContextLogin();

  const [openMenu, setOpenMenu] = useState(false);
  const [openModalPerfil, setOpenModalPerfil] = useState(false);
  const [openModalAgendamento, setOpenModalAgendamento] = useState(false);
  const [openModalPutAgendamento, setOpenModalPutAgendamento] = useState(false);
  const [nome, setNome] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [idAgendamento, setIdAgendamento] = useState("");
  const [exame, setExame] = useState("");
  const [dataAgendamento, setDataAgendamento] = useState("");
  const [horarioAgendamento, setHorarioAgendamento] = useState("");
  const [controlador, setControlador] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleOpenModalPerfil = async (cpf) => {
    const infosCliente = await RequestBackendCliente.getClientePorCpf(cpf);
    setNome(infosCliente.nome);
    setNascimento(infosCliente.dataNascimento);
    setOpenModalPerfil(true);
  };
  const handleCloseModalPerfil = () => {
    setOpenModalPerfil(false);
    setOpenMenu(false);
  };

  const handleOpenModalAgendamento = () => {
    setOpenModalAgendamento(true);
  };
  const handleCloseModalAgendamento = () => {
    setOpenModalAgendamento(false);
    setOpenMenu(false);
  };

  const handleOpenModalPutAgendamento = (id, exame, data, horario) => {
    setIdAgendamento(id);
    setExame(exame);
    setDataAgendamento(data);
    setHorarioAgendamento(horario);
    setOpenModalPutAgendamento(true);
    setControlador(!controlador);
  };

  const handleCloseModalPutAgendamento = () => {
    setOpenModalPutAgendamento(false);
    setOpenMenu(false);
    setControlador(!controlador);
  };

  const handleDeleteAgendamento = async (id) => {
    await RequestBasckendAgendamento.deleteAgendamentoPorId(id);
    setControlador(!controlador);
  };

  const [listaAgendamento, setListaAgendamento] = useState([]);
  useEffect(() => {
    const handleLista = async () => {
      const listaAgendamentoDoCliente = await RequestBackendCliente.getClienteAgendamentoPorCpf(
        cpf
      );
      setListaAgendamento(listaAgendamentoDoCliente);
    };
    handleLista();
  }, [controlador, openMenu, cpf]);

  return (
    <>
      <BarraPrincipal drawyerEvent={handleOpenMenu} tituloNavBar="Área do Cliente"/>
      <Drawer anchor="right" open={openMenu} onClose={handleCloseMenu}>
        <Card style={{marginBottom: "2rem", marginTop: "0.5rem", display: "flex", flexDirection:"column"}}>
        <AccountCircleIcon style={{fontSize: "50", alignSelf: "center"}}/>
          <Typography style={{textAlign: "center"}}>Usuário: {contextNome}</Typography>
        </Card>
        <Botao
          text="Realizar agendamento"
          variante="text"
          cor="menuLateral"
          onclick={() => handleOpenModalAgendamento()}
        />
        <Botao
          text="Editar cadastro"
          variante="text"
          cor="menuLateral"
          onclick={() => handleOpenModalPerfil(cpf)}
        />
        <Botao text="Logout" variante="text" cor="menuLateral" onclick={() => logout()}/>
      </Drawer>
      <Box className={classes.agendamentoList}>
        <Typography variant="h4">Meus exames agendados</Typography>
        <Listagem
          listagem={listaAgendamento}
          onClickEditButton={handleOpenModalPutAgendamento}
          onClickDeleteButton={handleDeleteAgendamento}
        />
      </Box>

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
            agendamentoPut={false}
            closePostModal={handleCloseModalAgendamento}
          />
        }
      />

      <CustomModal
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
            valueNascimento={nascimento}
            showDeleteButton={true}
            closeModal={() => handleCloseModalPerfil()}
          />
        }
      />

      <CustomModal
        open={openModalPutAgendamento}
        onclose={() => handleCloseModalPutAgendamento()}
        classNameModal={classes.modalAgendamento}
        classNameBox={classes.modalBox}
        child={
          <Agendamento
            titulo="Editar Agendamento"
            labelData="Edite sua Data"
            labelHorario="Selecione um novo horário"
            valueIdAgendamento={idAgendamento}
            valueExame={exame}
            valueData={dataAgendamento}
            valueHorario={horarioAgendamento}
            showEditButton={true}
            agendamentoPut={true}
            closePutModal={handleCloseModalPutAgendamento}
          />
        }
      />
    </>
  );
}
