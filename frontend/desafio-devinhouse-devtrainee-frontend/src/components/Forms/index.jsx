import { useState } from "react";
import { Wrapper, NewButton } from "./styles";

import Input from "../Input";
import ContainerModel from "../ContainerModel";
import Button from "../Button";
import EyeButton from "../EyeButton";

function Forms(props) {
  const { handleSubmit } = props;

  const [open, setOpen] = useState(false);

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
          <Wrapper className="wrapper">
            <Input
              label="Senha (alfanumérica - 6 a 10 caracteres)"
              type="password"
              id="senhaDoPaciente"
            />
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
          <NewButton className="buttons">
            <Button
              handleClick={() => {
                const nome = document.getElementById("nomeDoPaciente");
                nome.value = "";
                const cpf = document.getElementById("cpfDoPaciente");
                cpf.value = "";
                const dataDeNascimento = document.getElementById(
                  "dataDeNascimentoDoPaciente"
                );
                dataDeNascimento.value = "";
                const password = document.getElementById("senhaDoPaciente");
                password.value = "";
              }}
              buttonName="limpar"
            />
            <Button handleClick={handleSubmit} buttonName="cadastrar" />
          </NewButton>
        </>
      }
    />
  );
}

export default Forms;
