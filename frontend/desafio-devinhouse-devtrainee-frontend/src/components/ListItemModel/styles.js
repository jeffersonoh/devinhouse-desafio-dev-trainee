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
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
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
`;
