import { Container, Wrapper, Forms } from "./styles";

import Input from "../../components/Input";
import LightDivindingLine from "../../components/LightDividingLine";
import RegisterButtons from "../../components/RegisterButtons";

function RegisterPatientsPage() {
  return (
    <Container>
      <Wrapper>
        <h1>Cadastrar paciente</h1>
        <LightDivindingLine />
        <Forms>
          <Input label="Nome" type="text" id="nomeDoPaciente" />
          <Input label="CPF" type="text" id="cpfDoPaciente" />
          <Input
            label="Data de nascimento"
            type="date"
            id="dataDeNascimentoDoPaciente"
          />
          <RegisterButtons
            buttonName="Cadastrar"
            handleClick={(e) => {
              const name = document.getElementById("nomeDoPaciente");
              const cpf = document.getElementById("cpfDoPaciente");
              const date = document.getElementById(
                "dataDeNascimentoDoPaciente"
              );
              name.value = "";
              cpf.value = "";
              date.value = "";
              e.preventDefault();
            }}
          />
        </Forms>
      </Wrapper>
    </Container>
  );
}

export default RegisterPatientsPage;
