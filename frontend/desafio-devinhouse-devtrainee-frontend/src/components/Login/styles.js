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

  @media (max-width: 541px) {
    position: unset;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    div {
      position: unset;
      display: flex;
      flex-direction: column;
      width: 50%;
      text-align: center;
    }

    button {
      position: unset;
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 90%;
      padding: 0;
      padding-top: 5px;
      padding-bottom: 5px;
      margin: 0;
    }
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
