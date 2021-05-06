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

    &:hover {
      background: blue;
    }
  }

  > button.limpar {
    background: darkred;

    &:hover {
      background: red;
    }
  }

  > button.register {
    background: darkgreen;

    &:hover {
      background: green;
    }
  }

  @media (max-width: 541px) {
    width: 32.5%;
    > button {
      font-size: small;
      padding: 0;
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
