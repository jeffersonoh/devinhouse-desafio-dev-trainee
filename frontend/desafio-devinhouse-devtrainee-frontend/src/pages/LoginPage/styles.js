import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: change 10s ease-in-out infinite;
`;

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  top: 50%;
`;
