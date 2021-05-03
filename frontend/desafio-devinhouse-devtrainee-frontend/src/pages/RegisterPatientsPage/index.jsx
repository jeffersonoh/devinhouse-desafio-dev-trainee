import { Container, Wrapper } from "./styles";

import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

import { testCpf } from "../../util/CPFValidation";
import { validateName } from "../../util/nameValidation";
import { validateBornDate } from "../../util/bornDateValidation";
import { formatterDate } from "../../util/dateFormat";

import LightDivindingLine from "../../components/LightDividingLine";
import PatientForms from "../../components/PatientForms";
import RegisterButtons from "../../components/RegisterButtons";

import PacientesAPI from "../../services/pacientes";

function RegisterPatientsPage() {
  const salvarPaciente = (paciente) => {
    PacientesAPI.salvarPaciente(paciente);
  };

  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <h1>Cadastrar paciente</h1>
        <LightDivindingLine />
        <PatientForms
          children={
            <RegisterButtons
              handleSubmit={() => {
                const nome = document.getElementById("nomeDoPaciente").value;
                const cpf = document.getElementById("cpfDoPaciente").value;
                const date = document.getElementById(
                  "dataDeNascimentoDoPaciente"
                ).value;

                if ((validateName(nome) === false ? "" : nome) === "") {
                  toast.error("Informe um nome válido!");
                } else if ((testCpf(cpf) === false ? "" : cpf) === "") {
                  toast.error("Informe um CPF válido!");
                } else if (
                  (validateBornDate(date) === false ? "" : date) === ""
                ) {
                  toast.error("Informe uma data válida!");
                } else {
                  const patient = {
                    patientName: nome,
                    patientCpf: cpf,
                    patientBornDate: formatterDate(date),
                  };

                  salvarPaciente(patient);

                  navigate("/paciente/listar");
                }
              }}
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
