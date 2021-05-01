import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 500% 500%;
  animation: change 10s ease-in-out infinite;

  > h1 {
    letter-spacing: 1px;
    color: whitesmoke;
    padding-top: 1%;
    text-align: center;
    margin-bottom: 2%;
  }
`;

export const Wrapper = styled.div`
  margin-top: 2%;
`;
