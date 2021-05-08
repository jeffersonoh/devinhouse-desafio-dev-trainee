import styled, { css } from "styled-components";

import { FaGithub } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 50px;
  background-color: darkgreen;
  color: whitesmoke;
  text-align: end;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  margin-bottom: 0;
  border-top: 5px solid whitesmoke;
  justify-content: space-between;

  > button {
    border: none;
    background: transparent;
    width: 15%;
    cursor: pointer;
  }

  > h3 {
    margin: auto;
    font-size: x-large;
    margin-right: 5%;
  }
`;

const iconCSS = css`
  height: 30px;
  width: 30px;
  flex-shrink: 0;
  fill: whitesmoke;
`;

export const GitHubLogo = styled(FaGithub)`
  ${iconCSS}
`;
