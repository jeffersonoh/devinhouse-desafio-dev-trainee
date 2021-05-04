import React, { useState, useEffect } from "react";

import { Box, Drawer, makeStyles, Typography } from "@material-ui/core";

import RequestBackendCliente from "../../utils/ClienteRequest";
import {Listagem} from "../../components/listagem";
import BarraPrincipal from "../../components/Header/BarraPrincipal";
import Botao from "../../components/Button/Botao";
import theme from "./AreaPrincipal.style";

const useStyles = makeStyles({
  agendamentoList: {
    ...theme.agendamentoSpacing,
  },
});

export default function AreaPrincipalCliente() {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = React.useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
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

  return (
    <>
      <BarraPrincipal drawyerEvent={handleOpenMenu} />
      <Drawer anchor="right" open={openMenu} onClose={handleCloseMenu}>
        <Botao text="Realizar agendamento" variante="text" cor="menuLateral" />
        <Botao text="Editar cadastro" variante="text" cor="menuLateral" />
        <Botao text="Logout" variante="text" cor="menuLateral" />
      </Drawer>
      <Box className={classes.agendamentoList}>
        <Typography variant="h4">Meus exames agendados</Typography>
        {/* AQUI VAI O GET ALL AGENDAMENTOS DESSE USUÁRIO */}
        <Listagem listagem={listaAgendamento}/>
      </Box>
    </>
  );
}
