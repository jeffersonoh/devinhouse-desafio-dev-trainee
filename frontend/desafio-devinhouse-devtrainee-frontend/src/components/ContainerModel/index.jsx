import DividingLine from "../DividingLine";
import BackButton from "../BackButton";

import { Container } from "./styles";

function ContainerModel(props) {
  return (
    <Container className="Container">
      <BackButton />
      <h1>{props.title}</h1>
      <DividingLine />
      {props.children}
    </Container>
  );
}

export default ContainerModel;
