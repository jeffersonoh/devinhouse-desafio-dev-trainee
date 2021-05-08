import styled from "styled-components";

export const Container = styled.div`
  height: 100vmax;
  width: 100%;

  > h1 {
    letter-spacing: 1px;
    color: whitesmoke;
    padding-top: 1%;
    text-align: center;
    margin-bottom: 2%;
  }

  h2 {
    text-align: center;
    color: whitesmoke;
    font-size: xx-large;
    font-weight: 900;
    text-decoration: underline;
    margin-top: 2%;
  }

  @media (max-width: 541px) {
    > h1 {
      font-size: large;
    }
    > h2 {
      width: 90%;
      margin: auto;
      margin-top: 1%;
      font-size: large;
    }
  }
`;

export const Wrapper = styled.div`
  height: 100vh;
  margin-bottom: 200%;
`;
