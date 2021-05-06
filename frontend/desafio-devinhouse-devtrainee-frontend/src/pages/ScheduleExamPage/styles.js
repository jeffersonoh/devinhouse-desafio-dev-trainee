import styled from "styled-components";

export const Container = styled.div`
  > h1 {
    margin-top: 1%;
    text-align: center;
    color: whitesmoke;
    margin-bottom: 1%;
  }
  @media (max-width: 541px) {
    height: 100%;
    > h1 {
      font-size: large;
    }
  }
`;
