import styled from "styled-components";

export const Container = styled.div`
  width: 55%;
  margin: auto;
  margin-top: 2%;
  margin-bottom: 2%;

  @media (max-width: 541px) {
    width: 80%;
  }
`;

export const Wrapper = styled.form`
  background: white;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  padding: 7px 10px;
`;

export const ExamName = styled.div`
  text-align: center;
  margin-top: 1%;
  font-size: large;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media (max-width: 541px) {
    font-size: medium;
  }
`;

export const ExamId = styled.div`
  text-align: justify;
  margin-left: 10%;
  margin-top: 1%;
  font-size: large;
  margin-bottom: 0;

  @media (max-width: 541px) {
    font-size: medium;
    margin-left: 3.5%;
    margin-bottom: 7.2%;
  }
`;
