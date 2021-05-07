import React, { useState } from "react";

import { Drawer, Typography } from "@material-ui/core";

import {BarraPrincipal} from "../../components/Header";
import {Botao}from "../../components/Button";
import RequestBackendCliente from "../../services/ClienteRequest";
import RequestBackendExame from "../../services/ExameRequest";
import ListagemClientes from "./ListagemAdmin/ListagemClientes";
import ListagemCliente from "./ListagemAdmin/ListagemCliente";
import ListagemExames from "./ListagemAdmin/ListagemExames";
import { CustomModal } from "../../components/CustomModal";
import { Pesquisa } from "./Pesquisa";
import { cpfMask } from "../../utils/cpfMask";
import { useContextLogin } from "../../utils/contextLogin";
import {errorClienteGet} from "../../utils/alertas";

export function AreaAdmin() {
  const { usuarioState: {loginStatus}, logout } = useContextLogin();

  const [openMenu, setOpenMenu] = useState(false);
  const [showExames, setShowExames] = useState(false);
  const [showListaClientes, setShowListaClientes] = useState(false);
  const [showCliente, setShowCliente] = useState(false);
  const [openModalPesquisa, setOpenModalPesquisa] = useState(false);

  const [cliente, setCliente] = useState("");
  const [exames, setExames] = useState([]);
  const [listaClientes, setListaClientes] = useState([]);
  const [cpf, setCpf] = useState("");

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleCliente = () => {
    setShowCliente(true);
    setShowExames(false);
    setShowListaClientes(false);
    handleCloseMenu();
    handleOpenModalPesquisa();
  };
  const handleListaClientes = () => {
    setShowListaClientes(true);
    setShowCliente(false);
    setShowExames(false);
    handleCloseMenu();
    listarTodosClientes();
  };
  const handleShowExames = () => {
    setShowExames(true);
    setShowListaClientes(false);
    setShowCliente(false);
    handleCloseMenu();
    listarTodosExames();
  };

  const listarTodosClientes = async () => {
    const lista = await RequestBackendCliente.getTodosClientes();
    setListaClientes(lista);
  };

  const listarTodosExames = async () => {
    const lista = await RequestBackendExame.getTodosExames();
    setExames(lista);
  };

  const handleOpenModalPesquisa = () => {
    setOpenModalPesquisa(true);
  };
  const handleCloseModalPesquisa = () => {
    setOpenModalPesquisa(false);
  };

  const handlePesquisaCliente = async () => {
    if(cpf === "") {
      return errorClienteGet();
    }
    const cliente = await RequestBackendCliente.getClientePorCpf(cpf);
    setCliente(cliente);
    setCpf("");
    handleCloseModalPesquisa();
    handleCloseMenu();
  };

  const handleCpf = (e) => {
    const { value } = e.target;
    setCpf(cpfMask(value));
  };

  return (
    <>
      <BarraPrincipal showOptions={loginStatus} drawyerEvent={handleOpenMenu} tituloNavBar="Área do Administrador"/>
      <Drawer anchor="right" open={openMenu} onClose={handleCloseMenu}>
        <Botao
          text="Pesquisar cliente"
          variante="text"
          cor="menuLateral"
          onclick={() => handleCliente()}
        />
        <Botao
          text="Listar clientes"
          variante="text"
          cor="menuLateral"
          onclick={() => handleListaClientes()}
        />
        <Botao
          text="Listar exames"
          variante="text"
          cor="menuLateral"
          onclick={() => handleShowExames()}
        />
        <Botao text="Logout" variante="text" cor="menuLateral" onclick={() => logout()}/>
      </Drawer>
      
      {showExames === true && (
        <>
          <Typography variant="h4" style={{textAlign: "center"}}>Listagem de Exames</Typography>
          <ListagemExames listagem={exames} />
        </>
      )}
      {showListaClientes === true && (
        <>
          <Typography variant="h4" style={{textAlign: "center"}}>Listagem de clientes</Typography>
          <ListagemClientes listagem={listaClientes} />
        </>
      )}
      {showCliente === true && (
        <>
          <Typography variant="h4" style={{textAlign: "center"}}>Resultado da pesquisa</Typography>
          <CustomModal
            open={openModalPesquisa}
            onclose={handleCloseModalPesquisa}
            child={
              <Pesquisa
                value={cpf}
                handleCpf={handleCpf}
                handlePesquisa={handlePesquisaCliente}
              />
            }
          />
          <ListagemCliente listagem={cliente} />
        </>
      )}
    </>
  );
}
