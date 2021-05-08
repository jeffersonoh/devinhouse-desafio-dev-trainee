import { useState } from "react";

import { Forms, Wrapper } from "./styles";

import Input from "../../components/Input";
import EyeButton from "../../components/EyeButton";

function PatientForms(props) {
  const {
    children,
    nameValue,
    cpfValue,
    dateValue,
    passwordValue,
    handleChange,
  } = props;

  const [open, setOpen] = useState(false);

  return (
    <Forms className="patientsForm">
      <Input
        label="Nome"
        type="text"
        id="nomeDoPaciente"
        value={nameValue}
        handleChange={handleChange}
      />
      <Input
        label="CPF"
        type="text"
        id="cpfDoPaciente"
        value={cpfValue}
        handleChange={handleChange}
      />
      <Input
        label="Data de nascimento"
        type="date"
        id="dataDeNascimentoDoPaciente"
        value={dateValue}
        handleChange={handleChange}
      />
      <Wrapper>
        <Input
          label="Senha (alfanumérica - 6 a 10 caracteres)"
          type="password"
          value={passwordValue}
          id="senhaDoPaciente"
          handleChange={handleChange}
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
      {children}
    </Forms>
  );
}

export default PatientForms;
