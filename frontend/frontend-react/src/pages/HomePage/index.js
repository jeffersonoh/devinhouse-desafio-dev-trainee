import React, { useState } from "react";

import {BarraPrincipal} from "../../components/Header";
import { CustomModal } from "../../components/CustomModal";
import { CadastroCliente } from "../../components/CadastroCliente";
import { Login } from "./Login";
import { Typography } from "@material-ui/core";

export function HomePage() {
  const [openModalCadastro, setOpenModalCadastro] = useState(false);
  const [openModalLogin, setOpenModalLogin] = useState(false);

  const handleOpenModalCadastro = () => {
    setOpenModalCadastro(true);
  };
  const handleCloseModalCadastro = () => {
    setOpenModalCadastro(false);
  };

  const handleOpenModalLogin = () => {
    setOpenModalLogin(true);
  };
  const handleCloseModalLogin = () => {
    setOpenModalLogin(false);
  };

  return (
    <>
      <BarraPrincipal
        clickCadastro={() => handleOpenModalCadastro()}
        clickLogin={() => handleOpenModalLogin()}
      />

      <Typography
        variant="h1"
        style={{ textAlign: "center", marginTop: "4rem" }}
      >
        Bem-Vindo!
      </Typography>
      <Typography
        variant="h6"
        style={{ textAlign: "center", marginTop: "1rem" }}
      >
        Sistema de agendamento de exames DEVinHouse
      </Typography>
      <Typography
        variant="h6"
        style={{ textAlign: "center", marginTop: "1rem" }}
      >
        (Clique no botão minha conta)
      </Typography>
      {openModalCadastro === true && (
        <CustomModal
          open={openModalCadastro}
          onclose={handleCloseModalCadastro}
          child={
            <CadastroCliente
              titulo="Cadastro de cliente"
              labelCpf="Digite seu CPF"
              labelNome="Digite seu nome"
              labelNascimento="Digite sua data de nascimento"
              showDeleteButton={false}
            />
          }
        />
      )}

      {openModalLogin === true && (
        <CustomModal
          open={openModalLogin}
          onclose={handleCloseModalLogin}
          child={
            <Login
              titulo="Realize seu Login"
              labelCpf="Digite seu CPF"
              labelNome="Digite seu nome"
              labelNascimento="Digite sua data de nascimento"
              showDeleteButton={false}
            />
          }
        />
      )}
    </>
  );
}
