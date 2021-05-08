import { ButtonModel } from "./styles";

function Button(props) {
  return (
    <ButtonModel>
      <button onClick={props.handleClick} className={props.buttonName}>
        {props.buttonName}
        {props.children}
      </button>
    </ButtonModel>
  );
}

export default Button;
