import ButtonStyled from "./style";
import { Link, useLocation } from "react-router-dom";


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