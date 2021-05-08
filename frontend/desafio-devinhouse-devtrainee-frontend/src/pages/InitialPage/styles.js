import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  color: #fff;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  position: relative;
  animation: change 10s ease-in-out infinite;

  @media (max-width: 541px) {
    max-height: 100vh;
    max-width: 100%;
    position: unset;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    text-align: center;

    div.line {
      margin-top: -10%;
      width: 90%;
    }
  }
`;

export const Title = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem 6rem;

  @media (max-width: 541px) {
    font-size: xx-large;
    position: unset;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 20%;
    transform: none;
    margin-top: 40%;
  }
`;

export const SubTitle = styled.div`
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 3rem 6rem;

  @media (max-width: 541px) {
    width: 100%;
    font-size: x-large;
    position: unset;
    padding: 0;
    margin: auto;
    margin-bottom: 50%;
    transform: none;
  }
`;

export const NewButton = styled.div`
  > .cadastrar a {
    height: 100%;
    width: 100%;
    color: #fff;
    text-decoration: none;
  }

  > div .cadastrar {
    color: #fff;
    right: 51%;
    border: 3px solid #000;
    background-color: black;

    @media (max-width: 541px) {
      position: flex;
      flex-direction: row;
      font-size: xx-small;
      width: 40%;
      justify-content: center;
    }
  }

  > div .cadastrar:hover {
    background-color: gray;
  }

  > div .login {
    color: #000;
    border: 3px solid #fff;
    left: 51%;
    background-color: white;

    @media (max-width: 541px) {
      position: flex;
      flex-direction: row;
      font-size: xx-small;
      width: 40%;
      justify-content: center;
    }
  }

  > div .login a {
    height: 100%;
    width: 100%;
    color: #000;
    text-decoration: none;
  }

  > div .login:hover {
    background-color: greenyellow;
  }
`;
