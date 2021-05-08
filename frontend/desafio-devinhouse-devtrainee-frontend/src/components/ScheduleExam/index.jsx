import { Container, Wrapper, ExamName, ExamId } from "./styles";

import Input from "../../components/Input";

function ScheduleExam(props) {
  const {
    examName,
    examId,
    children,
    patientValue,
    cpfValue,
    dateValue,
    examTimeValue,
    handleChange,
  } = props;
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
          readonlyValue={patientValue}
          handleChange={handleChange}
        />
        <Input
          type="text"
          name="patientCpf"
          id="cpf"
          label="CPF do paciente"
          readonlyValue={cpfValue}
          handleChange={handleChange}
        />
        <Input
          type="date"
          name="examDate"
          id="date"
          label="Data do exame"
          value={dateValue}
        />
        <Input
          type="time"
          name="examTime"
          id="time"
          label="Horário do exame"
          value={examTimeValue}
        />
        {children}
      </Wrapper>
    </Container>
  );
}

export default ScheduleExam;
