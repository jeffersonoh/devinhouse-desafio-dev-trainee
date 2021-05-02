import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Wrapper, NewButton } from "./styles";

import Input from "../Input";
import ContainerModel from "../ContainerModel";
import Button from "../Button";
import EyeButton from "../EyeButton";

function Forms() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  return (
    <ContainerModel
      title="Cadastrar"
      children={
        <>
          <Input label="Nome" type="text" id="nomeDoPaciente" />
          <Input label="CPF" type="text" id="cpfDoPaciente" />
          <Input
            label="Data de nascimento"
            type="date"
            id="dataDeNascimentoDoPaciente"
          />
          <Input label="Senha" type="password" id="senhaDoPaciente" />
          <Wrapper>
            <EyeButton
              open={open}
              handleClick={() => {
                setOpen(!open);
                let senha = document.getElementById("senhaDoPaciente");
                if (senha.type === "password") {
                  senha.type = "text";
                } else {
                  senha.type = "password";
                }
              }}
            />
          </Wrapper>
          <br />
          <NewButton>
            <Button
              handleClick={() => {
                let nome = document.getElementById("nomeDoPaciente");
                nome.value = "";
                let cpf = document.getElementById("cpfDoPaciente");
                cpf.value = "";
                let dataDeNascimento = document.getElementById(
                  "dataDeNascimentoDoPaciente"
                );
                dataDeNascimento.value = "";
              }}
              buttonName="limpar"
            />
            <Button
              handleClick={() => {
                navigate("/");
              }}
              buttonName="cadastrar"
            />
          </NewButton>
        </>
      }
    />
  );
}

export default Forms;
