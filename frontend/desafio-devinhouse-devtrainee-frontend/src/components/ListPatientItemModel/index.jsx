import {
  Wrapper,
  Content,
  PatientName,
  PatientInformation,
  PatientCpf,
  PatientBornDate,
} from "./styles";

import ActionButtons from "../../components/ActionButtons";

function ListPatientItemModel(props) {
  const { patientName, patientCpf, patientBornDate, handleClick } = props;

  return (
    <Wrapper>
      <Content>
        <PatientName>
          <h3>Paciente: {patientName}</h3>
        </PatientName>
        <PatientInformation>
          <PatientCpf>
            <h4>CPF: {patientCpf}</h4>
          </PatientCpf>
          <PatientBornDate>
            Data de nascimento: {patientBornDate}
          </PatientBornDate>
        </PatientInformation>
      </Content>
      <ActionButtons handleClick={handleClick} />
    </Wrapper>
  );
}

export default ListPatientItemModel;
