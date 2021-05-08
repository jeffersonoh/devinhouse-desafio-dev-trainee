import React, { useEffect, useState } from "react";

import { Grid, Typography } from "@material-ui/core";
import { AddIcon } from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";

import { toast } from "react-toastify";

import CardDetails from "../../components/CardAgendamento";
import HeaderContainer from "../../components/HeaderContainer";
import ModalAgendamento from "../../components/ModalAgendamento";
import Container from "../../components/Container";
import AgendamentoService from "../../services/AgendamentoService";

toast.configure();
export default function Agendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);

  const showToastInfo = () => {
    toast.info("Agendamento excluido com sucesso", {
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
  const buscaAgendamentos = async () => {
    const res = await AgendamentoService.buscaAgendamentos();
    setAgendamentos(res);
  };

  useEffect(() => {
    buscaAgendamentos();
  }, []);

  return (
    <>
      <Container>
        <HeaderContainer
          helperText="Busca por nome do Cliente"
        >
          <ModalAgendamento
          label="CPF do Cliente"
            showToastSuccess={showToastSuccess}
            showToastError={showToastError}
            title="Novo Agendamento"
            icon={<AddIcon />}
            buscaAgendamentos={buscaAgendamentos}
          />
        </HeaderContainer>
        {agendamentos.length > 0 ? (
          agendamentos.map((item, index) => (
            <CardDetails
              showToastInfo={showToastInfo}
              buscaAgendamentos={buscaAgendamentos}
              key={index}
              item={item}
              titulo="Nome do Cliente "
              subtitulo="Consulta com: "
              data="Data e Hora"
              modal={
                <ModalAgendamento
                  showToastSuccess={showToastSuccess}
                  showToastError={showToastError}
                  data={item}
                  title="Editar"
                  icon={<EditIcon />}
                  buscaAgendamentos={buscaAgendamentos}
                  helperText="Somente atualizar a data e hora do agendamento"
                  InputProps={{
                    readOnly: true,
                  }}
                  label="Nome do Cliente"
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
            <Typography>Nenhum Agendamento cadastrado</Typography>
          </Grid>
        )}
      </Container>
    </>
  );
}
