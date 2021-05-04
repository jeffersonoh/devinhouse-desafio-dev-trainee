import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { Container, Wrapper, Buttons, Button, BackButton } from "./styles";

import { toast } from "react-toastify";

import { desformatterDate } from "../../util/dateDesformate";
import { testCpf } from "../../util/CPFValidation";
import { validateName } from "../../util/nameValidation";
import { validateBornDate } from "../../util/bornDateValidation";
import { formatterDate } from "../../util/dateFormat";

import LightDivindingLine from "../../components/LightDividingLine";
import PatientForms from "../../components/PatientForms";

import Loading from "../../components/Loading";

import PacienteAPI from "../../services/pacientes";
import AgendamentosAPI from "../../services/agendamentos";

function UpdatePatientPage() {
  const initialPatient = {
    patientName: "",
    patientCpf: "",
    patientBornDate: "",
  };

  const [patient, setPatient] = useState(initialPatient);

  const [agendamentos, setAgendamentos] = useState([]);

  const carregarAgendamentos = async () => {
    const agendamentos = await AgendamentosAPI.buscarAgendamentos();
    setAgendamentos(agendamentos);
  };

  const { id } = useParams();
  console.log(id);

  const procurarPaciente = async () => {
    console.log("id", id);
    const paciente = await PacienteAPI.procurarPaciente(id);
    setPatient(paciente);
  };

  const atualizarPaciente = (paciente) => {
    PacienteAPI.updatePatient(paciente, id);
    agendamentos.forEach((agendamento) => {
      if (agendamento.patientCpf === patient.patientCpf) {
        agendamento.patientName = paciente.patientName;
        agendamento.patientCpf = paciente.patientCpf;
        AgendamentosAPI.updateScheduledExam(agendamento, agendamento.id);
      }
    });
  };

  useEffect(() => {
    procurarPaciente();
    carregarAgendamentos();
  }, []);

  const [loaded, setLoaded] = useState(false);

  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        {console.log(patient)}
        <h1>Atualizar paciente</h1>
        <LightDivindingLine />
        {loaded === false && setTimeout(() => setLoaded(true), 3000) && (
          <Loading />
        )}
        {loaded === true && (
          <PatientForms
            nameValue={patient.patientName}
            cpfValue={patient.patientCpf}
            dateValue={desformatterDate(patient.patientBornDate)}
            children={
              <Buttons>
                <Button>
                  <button
                    className="back"
                    onClick={(e) => {
                      navigate("/paciente/listar");
                      e.preventDefault();
                    }}
                  >
                    <BackButton />
                  </button>
                </Button>
                <Button>
                  <button
                    className="register"
                    onClick={(e) => {
                      const nome = document.getElementById("nomeDoPaciente")
                        .value;
                      const cpf = document.getElementById("cpfDoPaciente")
                        .value;
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

                        atualizarPaciente(patient);

                        navigate("/paciente/listar");
                        e.preventDefault();
                      }
                    }}
                  >
                    Atualizar
                  </button>
                </Button>
              </Buttons>
            }
          />
        )}
      </Wrapper>
    </Container>
  );
}

export default UpdatePatientPage;
