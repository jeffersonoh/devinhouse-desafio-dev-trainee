import styled from "styled-components";

export const Container = styled.div`
  color: #000;
  font-size: medium;
  font-weight: 500;
  background-color: #fff;
  padding: 3px;
  border-radius: 5px;
  margin: auto;
  width: 50%;
  margin-bottom: 25px;
  padding: 25px 50px;
  display: flex;
  flex-direction: row;

  @media (max-width: 541px) {
    padding: 2px;
    font-weight: 300;
    font-size: small;
    width: 70%;
    margin-bottom: 20px;
    height: 15%;
  }
`;

export const Wrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 4%;
`;

export const Id = styled.div`
  width: 100%;
`;

export const ExamName = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  > div.examName {
    margin-left: 5px;
  }

  @media (max-width: 541px) {
    display: flex;
    flex-direction: column;

    > div.examName {
      margin-left: 0px;
      width: 70%;
    }
  }
`;

export const Button = styled.div`
  background-color: green;
  border: none;
  border-radius: 5px;
  width: 15%;

  > button {
    padding: 6px 3px;
    margin: auto;
    color: whitesmoke;
    border: none;
    background: transparent;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  @media (max-width: 541px) {
    width: 70px;

    > button {
      padding: 0;
    }
  }
`;
