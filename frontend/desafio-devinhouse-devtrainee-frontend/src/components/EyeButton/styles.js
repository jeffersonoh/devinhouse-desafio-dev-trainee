import styled, { css } from "styled-components";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

export const Container = styled.div`
  @media (max-width: 541px) {
    height: 10%;
    margin: auto;
  }
  > button {
    background: none;
    border: none;
    height: 10%;
    width: 5%;
    @media (max-width: 541px) {
      outline-color: whitesmoke;
    }
  }
`;

const iconCSS = css`
  height: 30px;
  width: 30px;
  fill: red;
  flex-shrink: 0;
  cursor: pointer;
  @media (max-width: 541px) {
    position: unset;
    display: flex;
    flex-direction: row;
    margin: auto;
    width: 15px;
    height: 100%;
  }
`;

export const OpenEyeButton = styled(BsFillEyeFill)`
  ${iconCSS}
`;

export const SlashEyeButton = styled(BsFillEyeSlashFill)`
  ${iconCSS}
`;
