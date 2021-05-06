import styled from "styled-components";

export const ButtonModel = styled.div`
  @media (max-width: 541px) {
    button {
      position: unset;
      display: flex;
      flex-direction: row;
    }
  }

  > button {
    position: absolute;
    top: 85%;
    width: 17%;
    text-transform: uppercase;
    padding: 1rem 2rem;
    text-align: center;
    background: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
