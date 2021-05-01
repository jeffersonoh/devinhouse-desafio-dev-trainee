import styled, { css } from "styled-components";

import { IoIosArrowBack } from "react-icons/io";

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.div`
  width: 15%;

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
  }

  > button.limpar {
    background: red;

    &:hover {
      background: orange;
    }
  }

  > button.register {
    background: green;

    &:hover {
      background: lightgreen;
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
