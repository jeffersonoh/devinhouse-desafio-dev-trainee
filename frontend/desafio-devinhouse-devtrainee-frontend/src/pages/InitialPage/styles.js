import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  color: #fff;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  position: relative;
  animation: change 10s ease-in-out infinite;
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
  }

  > div .cadastrar:hover {
    background-color: gray;
  }

  > div .login {
    color: #000;
    border: 3px solid #fff;
    left: 51%;
    background-color: white;
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
