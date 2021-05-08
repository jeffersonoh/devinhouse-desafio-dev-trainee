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
    padding: 2px;
    font-weight: 300;
    font-size: small;
    width: 90%;
    margin-bottom: 20px;
    height: 20%;
  }
`;

export const Content = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-left: 3%;
  text-align: start;
`;

export const PatientName = styled.div`
  color: black;
  padding: 5px 6px;
  height: 50%;
`;

export const PatientInformation = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 541px) {
    flex-direction: column;
  }
`;

export const PatientCpf = styled.div`
  color: black;
  padding: 5px 6px;
  height: 50%;
`;

export const PatientBornDate = styled.div`
  color: black;
  padding: 5px 6px;
  height: 50%;
  margin-left: 5%;

  @media (max-width: 541px) {
    margin-left: 0;
  }
`;
