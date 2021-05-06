import { useState, useEffect } from "react";

import ContainerModel from "../ContainerModel";
import Input from "../Input";
import EyeButton from "../EyeButton";

import { useNavigate } from "react-router-dom";

import { NewButton, Wrapper } from "./styles";

import Button from "../Button";

import { toast } from "react-toastify";

import PacientesAPI from "../../services/pacientes";

function Login() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [pacientes, setPacientes] = useState([]);

  const carregarPacientes = async () => {
    const pacientes = await PacientesAPI.buscarPacientes();
    setPacientes(pacientes);
  };

  const handleLogar = (cpf, senha) => {
    let encontrou = false;
    console.log(pacientes);
    if (pacientes.length > 0) {
      pacientes.forEach((patient) => {
        console.log("paciente", patient);
        if (patient.patientCpf === cpf && patient.password === senha) {
          encontrou = true;
          toast.success("Bem vindo(a) à Clínca DEVinHose!");
          navigate("/exames");
        }
      });
    }
    if (pacientes.length > 0 && !encontrou) {
      toast.error("O CPF e/ou a Senha não conferem!");
    }

    if (pacientes.length === 0) {
      toast.error("Não existem pacientes cadastrados!");
    }
  };

  useEffect(() => {
    carregarPacientes();
  }, []);
  return (
    <ContainerModel
      title="Login"
      children={
        <>
          <Input label="CPF" type="text" id="cpfDoPaciente" />
          <Wrapper>
            <Input label="Senha" type="password" id="senhaDoPaciente" />
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
          <NewButton className="Buttons">
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
                const cpf = document.getElementById("cpfDoPaciente").value;
                const senha = document.getElementById("senhaDoPaciente").value;
                handleLogar(cpf, senha);
              }}
              buttonName="logar"
            />
          </NewButton>
        </>
      }
    />
  );
}

export default Login;
