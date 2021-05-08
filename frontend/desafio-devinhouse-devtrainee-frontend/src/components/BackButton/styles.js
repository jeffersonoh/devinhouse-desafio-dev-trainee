import styled from "styled-components";

import { AiOutlineArrowLeft } from "react-icons/ai";

export const Container = styled.div`
  position: absolute;
  top: 5%;
  left: 3%;

  > button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const BackIcon = styled(AiOutlineArrowLeft)`
  height: 30px;
  width: 30px;
  fill: green;
`;
