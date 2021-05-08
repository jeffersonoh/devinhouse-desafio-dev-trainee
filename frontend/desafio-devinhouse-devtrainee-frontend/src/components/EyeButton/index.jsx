import { Container, OpenEyeButton, SlashEyeButton } from "./styles";

function EyeButton(props) {
  return (
    <Container className="eye">
      <button>
        {props.open === true && <OpenEyeButton onClick={props.handleClick} />}
        {props.open === false && <SlashEyeButton onClick={props.handleClick} />}
      </button>
    </Container>
  );
}

export default EyeButton;
