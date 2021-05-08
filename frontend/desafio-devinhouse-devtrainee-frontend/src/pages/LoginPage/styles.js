import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  @media (max-width: 541px) {
    padding: 1rem;
    height: 100vmax;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  top: 50%;
  @media (max-width: 541px) {
    height: 90%;
  }
`;
