import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  height: 80px;
  width: 70%;
  background: whitesmoke;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  padding: 5px 6px;
  margin: auto;
  margin-top: 2%;

  @media (max-width: 541px) {
    height: 50%;
    width: 85%;
  }
`;

export const ExamId = styled.div`
  padding: 1% 2%;
  border-radius: 50%;
  text-align: center;
  color: whitesmoke;
  font-size: large;
  font-weight: bold;
  margin: auto;
  background: darkblue;
  margin-left: 1%;
`;

export const Content = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-left: 3%;
  text-align: start;
`;

export const ExamName = styled.div`
  color: black;
  padding: 5px 6px;
  height: 50%;

  @media (max-width: 541px) {
    font-size: small;
  }
`;

export const ExamInformation = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 541px) {
    flex-direction: column;
  }
`;

export const PatientName = styled.div`
  color: black;
  padding: 5px 6px;
  height: 50%;
`;

export const ExamDate = styled.div`
  color: black;
  padding: 5px 6px;
  height: 50%;
`;

export const ExamTime = styled.div`
  color: black;
  padding: 5px 6px;
  height: 50%;
`;
