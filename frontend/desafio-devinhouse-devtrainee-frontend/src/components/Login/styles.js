import styled from "styled-components";

export const NewButton = styled.div`
  > div {
    top: 5%;
  }

  > div .logar {
    color: #fff;
    right: 31%;
    border: 3px solid darkblue;
    background-color: darkblue;
  }

  > div .logar a {
    height: 100%;
    width: 100%;
    color: #fff;
    text-decoration: none;
  }

  > div .logar:hover {
    background-color: gray;
  }

  > div .limpar {
    color: #fff;
    border: 3px solid red;
    left: 31%;
    background-color: red;
  }

  > div .limpar:hover {
    background-color: greenyellow;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  bottom: 90%;
  width: 20px;
  height: 20px;
`;
