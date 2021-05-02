import { Container, Buttons, Button, BackButton } from "./styles";

import { useNavigate } from "react-router-dom";

import LightDividingLine from "../../components/LightDividingLine";
import ScheduleExam from "../../components/ScheduleExam";

function UpdadeScheduledExamPage(props) {
  const { name, id } = props;
  const navigate = useNavigate();
  return (
    <Container>
      <h1>Atualizar agendamento</h1>
      <LightDividingLine />
      <ScheduleExam
        examName={name || "Hemograma"}
        examId={id || "114"}
        children={
          <>
            <Buttons>
              <Button>
                <button
                  className="back"
                  onClick={(e) => {
                    navigate("/agendamento/listar");
                    e.preventDefault();
                  }}
                >
                  <BackButton />
                </button>
              </Button>
              <Button>
                <button
                  type="submit"
                  className="register"
                  onClick={(e) => {
                    navigate("/agendamento/listar");
                    e.preventDefault();
                  }}
                >
                  Atualizar
                </button>
              </Button>
            </Buttons>
          </>
        }
      />
    </Container>
  );
}

export default UpdadeScheduledExamPage;
