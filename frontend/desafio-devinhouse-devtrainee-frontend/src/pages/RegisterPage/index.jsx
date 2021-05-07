import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { testCpf } from "../../util/CPFValidation";
import { validateName } from "../../util/nameValidation";
import { validateBornDate } from "../../util/bornDateValidation";
import { formatterDate } from "../../util/dateFormat";
import { validatePassword } from "../../util/passwordValidation";

import Forms from "../../components/Forms";

import { Container, Wrapper } from "./styles";

import PacientesAPI from "../../services/pacientes";

function RegisterPage() {
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
      navigate("/");
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
        <Forms
          handleSubmit={() => {
            const nome = document.getElementById("nomeDoPaciente").value;
            const cpf = document.getElementById("cpfDoPaciente").value;
            const date = document.getElementById("dataDeNascimentoDoPaciente")
              .value;
            const password = document.getElementById("senhaDoPaciente").value;

            if ((validateName(nome) === false ? "" : nome) === "") {
              toast.error("Informe um nome válido!");
            } else if ((testCpf(cpf) === false ? "" : cpf) === "") {
              toast.error("Informe um CPF válido!");
            } else if ((validateBornDate(date) === false ? "" : date) === "") {
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
        />
      </Wrapper>
    </Container>
  );
}

export default RegisterPage;
