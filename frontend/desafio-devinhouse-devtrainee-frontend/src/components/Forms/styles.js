import styled from "styled-components";

export const NewButton = styled.div`
  > div .cadastrar {
    color: #fff;
    right: 31%;
    border: 3px solid darkblue;
    background-color: darkblue;
  }

  > div .cadastrar {
    color: #fff;
    text-decoration: none;
  }

  > div .cadastrar:hover {
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
  @media (max-width: 541px) {
    position: unset;
    display: flex;
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: transparent;
  justify-content: space-between;
  margin-bottom: 3.5%;

  > div {
    width: 3%;
    margin-right: 7%;
    margin-top: 6%;
    background: transparent;
  }

  > div.input {
    width: 100%;
    margin-top: 0;
    margin-right: -13%;
  }

  @media (max-width: 541px) {
    > div {
      > button {
        height: 20px;
        width: 20px;
      }
    }

    > div.input {
      width: 90%;

      > div {
        > div {
          > label {
            font-size: x-small;
          }
        }
      }
    }
  }
`;
