import ButtonStyled from "./style";

function Button(props) {
  const {name, path} = props;
  
  return (
    <a href={`${path}`}>
      <ButtonStyled>
        {name}
      </ButtonStyled>
    </a>
  )
}

export default Button;