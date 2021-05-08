import { Container, BackIcon } from "./styles";

import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <Container>
      <button onClick={() => navigate("/")}>
        <BackIcon />
      </button>
    </Container>
  );
}

export default BackButton;
