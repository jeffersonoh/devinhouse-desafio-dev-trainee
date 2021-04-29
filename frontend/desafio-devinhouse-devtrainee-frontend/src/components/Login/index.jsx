import { useState } from "react";

import ContainerModel from "../ContainerModel";
import Input from "../Input";
import EyeButton from "../EyeButton";

import { Link, useHistory } from "react-router-dom";

import { NewButton, Wrapper } from "./styles";

import Button from "../Button";

function Login() {
  let history = useHistory();
  const [open, setOpen] = useState(false);
  return (
    <ContainerModel
      title="Login"
      children={
        <>
          <Input label="CPF" type="text" id="cpfDoPaciente" />
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
          <NewButton>
            <Button
              handleClick={() => {
                let cpf = document.getElementById("cpfDoPaciente");
                cpf.value = "";
                let senha = document.getElementById("senhaDoPaciente");
                senha.value = "";
              }}
              buttonName="limpar"
            />
            <Button
              handleClick={() => {
                history.push("/");
              }}
              buttonName="logar"
              children={<Link to="/" />}
            />
          </NewButton>
        </>
      }
    />
  );
}

export default Login;
