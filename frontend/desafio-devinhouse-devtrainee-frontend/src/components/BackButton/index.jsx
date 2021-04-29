import { Container, BackIcon } from "./styles";
import { useHistory } from "react-router-dom";

function BackButton() {
  let history = useHistory();

  return (
    <Container>
      <button onClick={history.goBack}>
        <BackIcon />
      </button>
    </Container>
  );
}

export default BackButton;
