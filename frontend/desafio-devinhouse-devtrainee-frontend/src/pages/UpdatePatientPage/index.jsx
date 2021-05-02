import { Container, Wrapper, Buttons, Button, BackButton } from "./styles";

import { useNavigate } from "react-router-dom";

import PatientForms from "../../components/PatientForms";
import LightDivindingLine from "../../components/LightDividingLine";

function UpdatePatientPage() {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <h1>Atualizar paciente</h1>
        <LightDivindingLine />
        <PatientForms
          children={
            <>
              <Buttons>
                <Button>
                  <button
                    className="back"
                    onClick={(e) => {
                      navigate("/paciente/listar");
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
                      navigate("/paciente/listar");
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
      </Wrapper>
    </Container>
  );
}

export default UpdatePatientPage;
