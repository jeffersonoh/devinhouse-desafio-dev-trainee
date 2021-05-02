import ButtonStyled from "./style";

function Button(props) {
  const {name} = props;
  
  return (
    <ButtonStyled>
      {name}
    </ButtonStyled>
  )
}

export default Button;