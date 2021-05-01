import { useState } from "react";

import { Link } from "react-router-dom";

import {
  Container,
  Header,
  ExitButton,
  Content,
  ShowMenu,
  ShowButton,
  NotShowButton,
  VerticalMenu,
  Wrapper,
  Footer,
} from "./styles";

function Potal(props) {
  const [show, setShow] = useState(true);
  // let history = useHistory();
  return (
    <Container>
      <Header>
        <h1>Clínica DEVinHouse</h1>
        <button className="exitButton">
          <ExitButton />
        </button>
      </Header>
      <Content className="content">
        <ShowMenu className="menu">
          <button
            className="notShow"
            id="showButton"
            onClick={() => {
              setShow(!show);
              let showButton = document.getElementById("showButton");
              let main = document.getElementById("main");
              if (show === true) {
                showButton.className = "show";
                main.className = "full";
              } else {
                main.className = "notFull";
                showButton.className = "notShow";
              }
            }}
          >
            {show === true && <NotShowButton />}
            {show !== true && <ShowButton />}
          </button>
        </ShowMenu>
        {show === true && (
          <VerticalMenu id="menu">
            <button className="option">Listar Exames</button>
            <button className="option">Listar Pacientes</button>
            <button className="option">Cadastrar Pacientes</button>
            <button className="option">Atualizar Paciente</button>
          </VerticalMenu>
        )}
        <Wrapper>
          <div className="notFull" id="main">
            <h1>{props.title}</h1>
            {props.children}
          </div>
        </Wrapper>
      </Content>
      <Footer />
    </Container>
  );
}

export default Potal;
