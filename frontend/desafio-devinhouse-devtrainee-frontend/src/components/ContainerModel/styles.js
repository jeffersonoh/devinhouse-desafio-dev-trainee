import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  padding: 3rem 3rem;
  border-radius: 5px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);

  > h1 {
    letter-spacing: 1px;
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 5%;
  }

  @media (max-width: 541px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    h1 {
      font-size: 1.7rem;
      margin-bottom: 5%;
    }

    div.line {
      height: 0.5rem;
      margin-bottom: 19px;
    }

    div.input {
      width: 90%;
    }

    div.wrapper {
      position: unset;
      margin: 0;
      width: 100%;
      display: flex;
      flex-direction: row;
      height: 20px;
      margin-bottom: 20%;
      margin-top: 15%;

      > div.eye {
        margin-top: 12%;
      }
    }

    div.buttons {
      width: 100%;
      height: 10%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 0;

      > div {
        margin: 0;
        height: 100%;
        width: 45%;
        display: flex;
        flex-direction: column;

        > button {
          margin: 0;
          justify-content: center;
          position: unset;
          height: 100%;
          width: 100%;
          padding: 0;
          padding-top: 5px;
          padding-bottom: 5px;
        }
      }
    }

    button {
      display: flex;
      flex-direction: row;
    }
  }
`;
