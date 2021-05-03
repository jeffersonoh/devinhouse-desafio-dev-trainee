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

function ScheduleExamPage() {
  const navigate = useNavigate();

  const agendar = (agendamento) => {
    AgendamentosAPI.salvarAgendamento(agendamento);
  };

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
              const nome = document.getElementById("name");
              const cpf = document.getElementById("cpf");
              const date = document.getElementById("date");
              const time = document.getElementById("time");

              if (
                (validateName(nome.value) === false ? "" : nome.value) === ""
              ) {
                toast.error("Informe um nome válido!");
              } else if (
                (testCpf(cpf.value) === false ? "" : cpf.value) === ""
              ) {
                toast.error("Informe um CPF válido!");
              } else if (
                (validateExamDate(date.value) === false ? "" : date.value) ===
                ""
              ) {
                toast.error("Informe uma data válida!");
              } else if (
                (validateTime(date.value, time.value) === false
                  ? ""
                  : time.value) === ""
              ) {
                toast.error("Informe um horário válido!");
              } else {
                const patientName = nome.value;
                const patientCpf = cpf.value;
                const examDate = formatterDate(date.value);
                const examTime = time.value;

                const agendamento = {
                  examName: name,
                  examId: id,
                  patientName: patientName,
                  patientCpf: patientCpf,
                  examDate: examDate,
                  examTime: examTime,
                };

                agendar(agendamento);

                navigate("/agendamento/listar");
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
