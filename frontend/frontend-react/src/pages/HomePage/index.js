import React, { useState, useEffect } from "react";

import BarraPrincipal from "../../components/Header/BarraPrincipal";
import { CustomModal } from "../../components/CustomModal";
import { CadastroCliente } from "../../pages/CadastroCliente";
import { Login } from "./Login";

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

      {openModalCadastro == true && (
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

      {openModalLogin == true && (
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
