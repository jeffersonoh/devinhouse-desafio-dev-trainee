import { Container, Wrapper, InputData, Underline } from "./styles";

function Input(props) {
  const { value, type, label, id, handleChange, readonlyValue } = props;

  return (
    <Container className="input">
      <Wrapper>
        <InputData>
          <input
            defaultValue={value}
            onChange={handleChange}
            value={readonlyValue}
            type={type}
            name={label}
            id={id}
            autoComplete="off"
            required
          />
          <Underline />
          <label htmlFor={id}>{label}</label>
        </InputData>
      </Wrapper>
    </Container>
  );
}

export default Input;
