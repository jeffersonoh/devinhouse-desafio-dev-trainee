import {
  Container,
  Wrapper,
  ExamId,
  Content,
  ExamName,
  PatientName,
  ExamInformation,
  ExamDate,
  ExamTime,
} from "./styles";

import ActionButtons from "../../components/ActionButtons";

function ListScheduledExamsItemModel(props) {
  const {
    examName,
    examId,
    patientName,
    examDate,
    examTime,
    handleClick,
  } = props;
  return (
    <Container>
      <Wrapper>
        <ExamId>{examId}</ExamId>
        <Content>
          <ExamName>
            <h3>Exame: {examName}</h3>
          </ExamName>
          <ExamInformation>
            <PatientName>
              <h4>Paciente: {patientName}</h4>
            </PatientName>
            <ExamDate>Data: {examDate}</ExamDate>
            <ExamTime>Horário: {examTime}</ExamTime>
          </ExamInformation>
        </Content>
        <ActionButtons handleClick={handleClick} />
      </Wrapper>
    </Container>
  );
}

export default ListScheduledExamsItemModel;
