import { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { Container } from "./styles";

import { testCpf } from "../../util/CPFValidation";
import { validateName } from "../../util/nameValidation";
import { validateExamDate } from "../../util/examDateValidation";
import { validateTime } from "../../util/timeValidation";
import { formatterDate } from "../../util/dateFormat";

import ScheduleExam from "../../components/ScheduleExam";
import LightDividingLine from "../../components/LightDividingLine";
import RegisterButtons from "../../components/RegisterButtons";

import AgendamentosAPI from "../../services/agendamentos";
import PacientesAPI from "../../services/pacientes";

function ScheduleExamPage() {
  const navigate = useNavigate();

  const [pacientes, setPacientes] = useState([]);

  const carregarPacientes = async (cpf) => {
    const patients = await PacientesAPI.buscarPacientes(cpf);
    setPacientes(patients);
  };

  const agendar = (agendamento) => {
    if (pacientes.length > 0) {
      let encontrou = false;
      let dadosConferem = false;
      pacientes.forEach((paciente) => {
        if (paciente.patientCpf === agendamento.patientCpf) {
          encontrou = true;
          if (paciente.patientName === agendamento.patientName) {
            dadosConferem = true;
            AgendamentosAPI.salvarAgendamento(agendamento);
            navigate("/agendamento/listar");
          }
        }
      });
      if (encontrou === false) {
        toast.error("O CPF informado não consta em nossa base de dados!");
      }
      carregarPacientes();
      if (dadosConferem === false && encontrou === true) {
        toast.error(
          "Os dados de Nome e CPF não conferem!" +
            "\nPor obséquio, verifique a grafia e tente novamente!"
        );
      }
    }
  };

  useEffect(() => {
    carregarPacientes();
  }, []);

  const { id, name } = useParams();
  return (
    <Container>
      <h1>Agendar exame</h1>
      <LightDividingLine />
      <ScheduleExam
        examName={name}
        examId={id}
        children={
          <RegisterButtons
            handleSubmit={() => {
              const nome = document.getElementById("name").value;
              const cpf = document.getElementById("cpf").value;
              const date = document.getElementById("date").value;
              const time = document.getElementById("time").value;

              if ((validateName(nome) === false ? "" : nome) === "") {
                toast.error("Informe um nome válido!");
              } else if ((testCpf(cpf) === false ? "" : cpf) === "") {
                toast.error("Informe um CPF válido!");
              } else if (
                (validateExamDate(date) === false ? "" : date) === ""
              ) {
                toast.error("Informe uma data válida!");
              } else if (
                (validateTime(date, time) === false ? "" : time) === ""
              ) {
                toast.error("Informe um horário válido!");
              } else {
                const patientName = nome;
                const patientCpf = cpf;
                const examDate = formatterDate(date);
                const examTime = time;

                const agendamento = {
                  examName: name,
                  examId: id,
                  patientName: patientName,
                  patientCpf: patientCpf,
                  examDate: examDate,
                  examTime: examTime,
                };
                agendar(agendamento);
              }
            }}
            buttonName="Agendar"
            handleClick={(e) => {
              const name = document.getElementById("name");
              const cpf = document.getElementById("cpf");
              const date = document.getElementById("date");
              const time = document.getElementById("time");
              name.value = "";
              cpf.value = "";
              date.value = "";
              time.value = "";
              e.preventDefault();
            }}
          />
        }
      />
    </Container>
  );
}

export default ScheduleExamPage;
