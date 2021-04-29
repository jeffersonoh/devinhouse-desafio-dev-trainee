import styled from "styled-components";

export const NewButton = styled.div`
  > div .cadastrar {
    color: #fff;
    right: 33%;
    border: 3px solid darkblue;
    background-color: darkblue;
  }

  > div .cadastrar a {
    height: 100%;
    width: 100%;
    color: #fff;
    text-decoration: none;
  }

  > div .cadastrar:hover {
    background-color: gray;
  }

  > div .limpar {
    color: #fff;
    border: 3px solid red;
    left: 33%;
    background-color: red;
  }

  > div .limpar:hover {
    background-color: greenyellow;
  }
`;
