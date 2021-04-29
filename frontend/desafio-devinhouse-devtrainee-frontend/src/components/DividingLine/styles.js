import styled from "styled-components";

export const Line = styled.div`
  height: 1rem;
  width: 50rem;
  border-radius: 50%;
  position: relative;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(90deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: change 5s ease-in-out infinite;
`;
