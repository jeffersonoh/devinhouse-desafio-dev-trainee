import styled from "styled-components";

export const Forms = styled.div`
  width: 70%;
  margin: auto;
  padding: 1rem;
  background: white;
  border-radius: 5px;
  margin-bottom: 1%;

  @media (max-width: 541px) {
    padding: 2rem;
    width: 80%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: transparent;
  justify-content: space-between;

  > div {
    width: 3%;
    margin-right: 6%;
    margin-top: 6%;
    background: transparent;
  }

  > div.input {
    width: 100%;
    margin-top: 0;
    margin-right: -13%;
  }

  @media (max-width: 541px) {
    > div {
      margin-top: 12.5%;
    }

    > div.input {
      width: 90%;

      > div {
        > div {
          > label {
            font-size: x-small;
          }
        }
      }
    }
  }
`;
