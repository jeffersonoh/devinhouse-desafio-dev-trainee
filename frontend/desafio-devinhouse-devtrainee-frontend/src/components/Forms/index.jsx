import Input from "../Input";
import ContainerModel from "../ContainerModel";
import Button from "../Button";
import { NewButton } from "./styles";
import { useNavigate } from "react-router-dom";

function Forms() {
  const navigate = useNavigate();
  return (
    <ContainerModel
      title="Cadastrar"
      children={
        <>
          <Input label="Nome" type="text" id="nomeDoPaciente" />
          <Input label="CPF" type="text" id="cpfDoPaciente" />
          <Input
            label="Data de nascimento"
            type="date"
            id="dataDeNascimentoDoPaciente"
          />
          <br />
          <NewButton>
            <Button
              handleClick={() => {
                let nome = document.getElementById("nomeDoPaciente");
                nome.value = "";
                let cpf = document.getElementById("cpfDoPaciente");
                cpf.value = "";
                let dataDeNascimento = document.getElementById(
                  "dataDeNascimentoDoPaciente"
                );
                dataDeNascimento.value = "";
              }}
              buttonName="limpar"
            />
            <Button
              handleClick={() => {
                navigate("/");
              }}
              buttonName="cadastrar"
            />
          </NewButton>
        </>
      }
    />
  );
}

export default Forms;
