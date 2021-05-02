import { Container, Wrapper } from "./styles";

import LightDivindingLine from "../../components/LightDividingLine";
import PatientForms from "../../components/PatientForms";
import RegisterButtons from "../../components/RegisterButtons";

function RegisterPatientsPage() {
  return (
    <Container>
      <Wrapper>
        <h1>Cadastrar paciente</h1>
        <LightDivindingLine />
        <PatientForms
          children={
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
          }
        />
      </Wrapper>
    </Container>
  );
}

export default RegisterPatientsPage;
