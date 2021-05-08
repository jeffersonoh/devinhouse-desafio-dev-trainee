import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  color: whitesmoke;
`;

export const Wrapper = styled.div`
  text-align: center;
  margin-top: 2%;

  > h1 {
    letter-spacing: 1px;
  }

  > div {
    margin-top: 1%;
    margin-top: 2%;
  }

  > form {
    margin-top: 3%;
    margin-bottom: 2%;
  }
  @media (max-width: 541px) {
    height: 100%;
    > h1 {
      font-size: large;
    }
  }
`;
