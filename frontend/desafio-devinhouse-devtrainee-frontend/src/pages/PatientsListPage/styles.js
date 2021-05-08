import styled from "styled-components";

export const Container = styled.div`
  height: 100vmax;
  width: 100%;
  > h1 {
    color: whitesmoke;
    letter-spacing: 1px;
    text-align: center;
    margin-top: 1%;
    margin-bottom: 1%;
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
    height: 100%;
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
