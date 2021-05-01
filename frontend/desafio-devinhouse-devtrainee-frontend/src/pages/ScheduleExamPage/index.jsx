import { useParams } from "react-router-dom";

import { Container } from "./styles";

import ScheduleExam from "../../components/ScheduleExam";
import LightDivindingLine from "../../components/LightDividingLine";

function ScheduleExamPage() {
  const { id, name } = useParams();
  return (
    <Container>
      <h1>Agendar exame</h1>
      <LightDivindingLine />
      <ScheduleExam examName={name} examId={id} />
    </Container>
  );
}

export default ScheduleExamPage;
