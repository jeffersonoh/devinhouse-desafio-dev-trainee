import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";

import { toast } from "react-toastify";

import CardDetails from "../../components/CardCLiente";
import ModalCliente from "../../components/ModalCliente";
import Container from "../../components/Container";
import HeaderContainer from "../../components/HeaderContainer";

import ClienteService from "../../services/ClienteService";

toast.configure();
export default function Clientes() {
  const [clientes, setClientes] = useState([]);

  // const query = new URLSearchParams(useLocation().search)
  // const term = query.get("cpf")


  const showToastWarning = () => {
    toast.warn('Impossivel excluir cliente com agendamento pendente', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
      
  }

  const showToastInfo = () => {
    toast.info("Cliente excluido com sucesso", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const showToastError = (error) => {
    toast.error(error, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const showToastSuccess = () => {
    toast.success("Cliente salvo com sucesso!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const buscaClientesCPF = async (cpf) => {
    const res = await ClienteService.buscaClienteCPF(cpf)
    setClientes([res])
  }

  const buscaClientes = async () => {
    try {
      const res = await ClienteService.buscaClientes();
      setClientes(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    buscaClientes();
  }, []);
  return (
    <>
      <Container>
        <Grid item xs={12}>
        <HeaderContainer
        helperText="Buscar utilizando somente o CPF"
        busca={buscaClientesCPF}
        >
          <ModalCliente
            label="CPF do Cliente"
            showToastSuccess={showToastSuccess}
            showToastError={showToastError}
            buscaClientes={buscaClientes}
            title="Novo Cliente"
            icon={<AddIcon />}
            />
        </HeaderContainer>
            </Grid>
        {clientes.length > 0 ? (
          clientes.map((item, index) => (
            <CardDetails
              key={index}
              showToastWarning={showToastWarning}
              showToastInfo={showToastInfo}
              buscaClientes={buscaClientes}
              item={item}
              titulo="Nome"
              cpf="CPF"
              modal={
                <ModalCliente
                  showToastSuccess={showToastSuccess}
                  showToastError={showToastError}
                  buscaClientes={buscaClientes}
                  data={item}
                  title="Editar"
                  icon={<EditIcon />}
                />
              }
            />
          ))
        ) : (
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Nenhum cliente cadastrado</Typography>
          </Grid>
        )}
      </Container>
    </>
  );
}
