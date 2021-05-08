import styled, { css } from "styled-components";

import { IoIosArrowBack } from "react-icons/io";

export const Container = styled.div`
  > h1 {
    margin-top: 1%;
    text-align: center;
    color: whitesmoke;
    margin-bottom: 1%;
  }

  @media (max-width: 541px) {
    > h1 {
      font-size: large;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  width: 50%;
  @media (max-width: 541px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const Button = styled.div`
  width: 40%;

  > button {
    color: whitesmoke;
    font-size: medium;
    font-weight: 500;
    border-radius: 5px;
    padding: 5px 10px;
    background: transparent;
    border: none;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
  > button.back {
    background: darkblue;

    &:hover {
      background: blue;
    }
  }

  > button.register {
    background: darkgreen;

    &:hover {
      background: green;
    }
  }
  @media (max-width: 541px) {
    width: 47%;
  }
`;

const iconCSS = css`
  height: 30px;
  width: 30px;
  flex-shrink: 0;
  fill: whitesmoke;

  @media (max-width: 541px) {
    height: 20px;
    width: 20px;
  }
`;

export const BackButton = styled(IoIosArrowBack)`
  ${iconCSS}
`;
