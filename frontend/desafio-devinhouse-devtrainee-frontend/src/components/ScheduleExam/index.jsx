import { Container, Wrapper, ExamName, ExamId } from "./styles";

import Input from "../../components/Input";
import RegisterButtons from "../../components/RegisterButtons";

function ScheduleExam(props) {
  const { examName, examId } = props;
  return (
    <Container>
      <Wrapper>
        <ExamName>
          <h2>{examName}</h2>
        </ExamName>
        <ExamId>
          <h3>ID: {examId}</h3>
        </ExamId>
        <Input
          type="text"
          name="patientName"
          id="name"
          label="Nome do paciente"
        />
        <Input type="text" name="patientCpf" id="cpf" label="CPF do paciente" />
        <Input type="date" name="examDate" id="date" label="Data do exame" />
        <Input type="time" name="examTime" id="time" label="Horário do exame" />
        <RegisterButtons
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
      </Wrapper>
    </Container>
  );
}

export default ScheduleExam;
