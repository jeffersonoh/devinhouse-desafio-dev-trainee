import styled, { css } from "styled-components";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

export const Container = styled.div`
  > button {
    background: none;
    border: none;
    height: 100%;
    width: 100%;
  }
`;

const iconCSS = css`
  position: absolute;
  top: -350%;
  left: 3700%;
  height: 30px;
  width: 30px;
  fill: red;
  flex-shrink: 0;
  cursor: pointer;
`;

export const OpenEyeButton = styled(BsFillEyeFill)`
  ${iconCSS}
`;

export const SlashEyeButton = styled(BsFillEyeSlashFill)`
  ${iconCSS}
`;
