import { Forms } from "./styles";

import Input from "../../components/Input";

function PatientForms(props) {
  const { children, nameValue, cpfValue, dateValue, handleChange } = props;
  return (
    <Forms className="patientsForm">
      <Input
        label="Nome"
        type="text"
        id="nomeDoPaciente"
        value={nameValue}
        handleChange={handleChange}
      />
      <Input
        label="CPF"
        type="text"
        id="cpfDoPaciente"
        value={cpfValue}
        handleChange={handleChange}
      />
      <Input
        label="Data de nascimento"
        type="date"
        id="dataDeNascimentoDoPaciente"
        value={dateValue}
        handleChange={handleChange}
      />
      {children}
    </Forms>
  );
}

export default PatientForms;
