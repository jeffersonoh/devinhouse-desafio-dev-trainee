import styled, { css } from "styled-components";
import { ImExit } from "react-icons/im";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 70px;
  background-color: darkgreen;
  border-bottom: 5px solid whitesmoke;
  justify-content: space-between;
  position: sticky;
  top: 0;

  > h1 {
    margin: auto;
    margin-left: 5%;
    margin-right: 5%;
    color: whitesmoke;
    white-space: nowrap;
  }

  > button {
    margin: 0;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  > button.option {
    height: 100%;
    width: 17%;
    color: whitesmoke;
    font-size: large;
    font-weight: 900;

    &:hover {
      background-color: green;
      border-top: 2px solid red;
    }
  }

  > button.selected {
    height: 100%;
    width: 17%;
    color: whitesmoke;
    font-size: large;
    font-weight: 900;
    background-color: green;
    border-top: 2px solid red;
  }

  > button#exit {
    width: 10%;
  }

  @media (max-width: 541px) {
    max-width: 100%;
    justify-content: space-between;

    > h1 {
      font-size: small;
      width: 15%;
      white-space: normal;
      margin-right: 7%;
    }

    > button {
      font-size: small;
    }

    > button.option {
      white-space: normal;
      font-size: xx-small;
      font-weight: lighter;
      width: 13%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    > button.selected {
      font-size: xx-small;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 13%;
    }
  }
`;

const iconCSS = css`
  height: 20px;
  width: 20px;
  fill: whitesmoke;
  flex-shrink: 0;
`;

export const ExitButton = styled(ImExit)`
  ${iconCSS}
  @media (max-width: 541px) {
    height: 10px;
    width: 10px;
  }
`;
