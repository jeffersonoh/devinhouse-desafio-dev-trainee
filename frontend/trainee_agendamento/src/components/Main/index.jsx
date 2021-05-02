import { MainStyle } from "./style";

function Main(props) {
  return (
    <MainStyle>
      {props.children}
    </MainStyle>
  )
};

export default Main;