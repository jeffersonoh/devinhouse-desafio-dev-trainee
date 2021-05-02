import styled, { css } from "styled-components";

import { IoIosArrowBack } from "react-icons/io";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  color: whitesmoke;
`;

export const Wrapper = styled.div`
  text-align: center;
  margin-top: 2%;

  > h1 {
    letter-spacing: 1px;
  }

  > div {
    margin-top: 1%;
    margin-top: 2%;
  }

  > form {
    margin-top: 3%;
    margin-bottom: 2%;
  }
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  width: 50%;
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
`;

const iconCSS = css`
  height: 30px;
  width: 30px;
  flex-shrink: 0;
  fill: whitesmoke;
`;

export const BackButton = styled(IoIosArrowBack)`
  ${iconCSS}
`;
