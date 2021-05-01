import Button from "../../components/Button";
import DividingLine from "../../components/DividingLine";

import { NewButton } from "./styles";

import { Container, Title, SubTitle } from "./styles";

import { useNavigate } from "react-router-dom";

export default function InitialPage() {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Title>Clínica DEVinHouse</Title>
        <DividingLine />
        <SubTitle>Agende agora sua consulta</SubTitle>
        <NewButton>
          <Button
            buttonName="cadastrar"
            handleClick={() => {
              navigate("cadastro");
            }}
          />
          <Button
            handleClick={() => {
              navigate("login");
            }}
            buttonName="Fazer login"
          />
        </NewButton>
      </Container>
    </>
  );
}
