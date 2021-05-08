import { useState, useEffect } from "react";

import { Container, Wrapper } from "./styles";

import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

import { testCpf } from "../../util/CPFValidation";
import { validateName } from "../../util/nameValidation";
import { validateBornDate } from "../../util/bornDateValidation";
import { formatterDate } from "../../util/dateFormat";
import { validatePassword } from "../../util/passwordValidation";

import LightDivindingLine from "../../components/LightDividingLine";
import PatientForms from "../../components/PatientForms";
import RegisterButtons from "../../components/RegisterButtons";

import PacientesAPI from "../../services/pacientes";

function RegisterPatientsPage() {
  const [patients, setPatients] = useState([]);

  const salvarPaciente = (paciente) => {
    let cpfJaExiste = false;
    if (patients.length > 0) {
      patients.forEach((patient) => {
        if (patient.patientCpf === paciente.patientCpf) {
          cpfJaExiste = true;
        }
      });
    }

    if (cpfJaExiste === true) {
      toast.error(
        "O CPF informado já está cadastrado!\nPor obséquio, informe outro!"
      );
    } else {
      PacientesAPI.salvarPaciente(paciente);
      navigate("/paciente/listar");
    }
  };

  const carregarPacientes = async (cpf) => {
    const patients = await PacientesAPI.buscarPacientes(cpf);
    setPatients(patients);
  };

  useEffect(() => {
    carregarPacientes();
  }, []);

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
                const password = document.getElementById("senhaDoPaciente")
                  .value;

                if ((validateName(nome) === false ? "" : nome) === "") {
                  toast.error("Informe um nome válido!");
                } else if ((testCpf(cpf) === false ? "" : cpf) === "") {
                  toast.error("Informe um CPF válido!");
                } else if (
                  (validateBornDate(date) === false ? "" : date) === ""
                ) {
                  toast.error("Informe uma data válida!");
                } else if (
                  (validatePassword(password) === false ? "" : password) === ""
                ) {
                  toast.error("Informe uma senha alfanumérica válida!");
                } else {
                  const patient = {
                    patientName: nome,
                    patientCpf: cpf,
                    patientBornDate: formatterDate(date),
                    password: password,
                  };

                  salvarPaciente(patient);
                }
              }}
              buttonName="Cadastrar"
              handleClick={(e) => {
                const name = document.getElementById("nomeDoPaciente");
                const cpf = document.getElementById("cpfDoPaciente");
                const date = document.getElementById(
                  "dataDeNascimentoDoPaciente"
                );
                const password = document.getElementById("senhaDoPaciente");
                name.value = "";
                cpf.value = "";
                date.value = "";
                password.value = "";
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
