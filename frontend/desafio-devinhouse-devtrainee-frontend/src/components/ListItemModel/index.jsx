import { Container, Wrapper, Id, ExamName, Button } from "./styles";

import { useNavigate } from "react-router-dom";

function ListItemModel(props) {
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <Id>Id: {props.id}</Id>
        <ExamName>
          <div>Nome do exame: </div>
          <div className="examName">{props.examName}</div>
        </ExamName>
      </Wrapper>
      <Button>
        <button
          onClick={() => {
            navigate(
              "/agendamento/cadastrar/" + props.id + "/" + props.examName
            );
          }}
          className="exam"
        >
          Agendar exame
        </button>
      </Button>
    </Container>
  );
}

export default ListItemModel;