import Button from "../../components/Button";
import DividingLine from "../../components/DividingLine";

import { Link, useHistory } from "react-router-dom";

import { NewButton } from "./styles";

import { Container, Title, SubTitle } from "./styles";

export default function InitialPage() {
  let history = useHistory();
  return (
    <>
      <Container>
        <Title>Clínica DEVinHouse</Title>
        <DividingLine />
        <SubTitle>Agende agora sua consulta</SubTitle>
        <NewButton>
          <Button
            handleClick={() => {
              history.push("cadastro");
            }}
            buttonName="cadastrar"
            children={<Link to="cadastro" />}
          />
          <Button
            handleClick={() => {
              history.push("login");
            }}
            buttonName="Fazer login"
            children={<Link to="login" />}
          />
        </NewButton>
      </Container>
    </>
  );
}
