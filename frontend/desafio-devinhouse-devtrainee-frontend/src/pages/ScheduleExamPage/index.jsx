import { useParams } from "react-router-dom";

import { Container } from "./styles";

import ScheduleExam from "../../components/ScheduleExam";
import LightDividingLine from "../../components/LightDividingLine";
import RegisterButtons from "../../components/RegisterButtons";

function ScheduleExamPage() {
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
