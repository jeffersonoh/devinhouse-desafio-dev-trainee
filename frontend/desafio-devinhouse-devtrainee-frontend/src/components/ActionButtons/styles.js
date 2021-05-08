import styled, { css } from "styled-components";

import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100%;
  justify-content: space-between;
`;

export const EditButton = styled.div`
  background: darkgreen;
  width: 100%;
  border-radius: 6px;
  margin-bottom: 0.25%;

  > button {
    border-radius: 6px;
    padding: 5px 6px;
    height: 100%;
    width: 100%;
    background: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      background: green;
    }
  }
`;

const iconCSS = css`
  height: 20px;
  width: 20px;
  fill: whitesmoke;
  flex-shrink: 0;
`;

export const EditButtonIcon = styled(FaEdit)`
  ${iconCSS}
`;

export const DeleteButton = styled.div`
  background: darkred;
  width: 100%;
  border-radius: 6px;
  margin-top: 0.25%;

  > button {
    border-radius: 6px;
    padding: 5px 6px;
    height: 100%;
    width: 100%;
    background: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      background: red;
    }
  }
`;

export const DeleteButtonIcon = styled(MdDeleteForever)`
  ${iconCSS}
`;
