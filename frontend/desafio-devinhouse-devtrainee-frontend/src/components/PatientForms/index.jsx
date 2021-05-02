import { Forms } from "./styles";

import Input from "../../components/Input";

function PatientForms(props) {
  const { children } = props;
  return (
    <Forms>
      <Input label="Nome" type="text" id="nomeDoPaciente" />
      <Input label="CPF" type="text" id="cpfDoPaciente" />
      <Input
        label="Data de nascimento"
        type="date"
        id="dataDeNascimentoDoPaciente"
      />
      {children}
    </Forms>
  );
}

export default PatientForms;
