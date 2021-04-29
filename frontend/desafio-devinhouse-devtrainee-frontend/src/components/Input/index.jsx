import { Container, Wrapper, InputData, Underline } from "./styles";

function Input(props) {
  return (
    <Container>
      <Wrapper>
        <InputData>
          <input
            type={props.type}
            name={props.label}
            id={props.id}
            autoComplete="off"
            required
          />
          <Underline />
          <label htmlFor={props.id}>{props.label}</label>
        </InputData>
      </Wrapper>
    </Container>
  );
}

export default Input;
