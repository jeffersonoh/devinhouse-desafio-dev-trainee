import styled, { css } from "styled-components";
import { ImExit } from "react-icons/im";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: change 10s ease-in-out infinite;
  color: whitesmoke;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: 5%;
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
    background: transparent;
    border: none;
    margin-top: auto;
    margin-bottom: auto;
    color: #fff;
    height: 20px;
    cursor: pointer;
    width: 20px;
    margin-right: 5%;
  }
`;

const iconCSS = css`
  height: 20px;
  width: 20px;
  fill: #fff;
  flex-shrink: 0;
`;

export const ExitButton = styled(ImExit)`
  ${iconCSS}
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
`;

export const ShowMenu = styled.div`
  height: 100vh;
  width: 22px;
  justify-content: space-between;

  > button {
    border: none;
    background: silver;
    bottom: 0;
    height: 100%;
    width: 22px;
    cursor: pointer;
  }

  > button.notShow {
    position: fixed;
    left: 10%;
  }

  > button.show {
    position: fixed;
    left: 0;
  }

  > button:hover {
    background: white;
  }
`;

export const NotShowButton = styled(FaArrowCircleLeft)`
  ${iconCSS}
  fill: darkblue;
`;

export const ShowButton = styled(FaArrowCircleRight)`
  ${iconCSS}
  fill: darkblue;
`;

export const VerticalMenu = styled.div`
  position: fixed;
  left: 0;
  top: 9.5%;
  height: 100vh;
  width: 10%;

  > button.option {
    background: darkgreen;
    color: whitesmoke;
    font-size: large;
    font-weight: bold;
    text-align: center;
    height: 22.58%;
    width: 100%;
    padding-top: 8%;
    border: none;
    border-bottom: 3px solid whitesmoke;
    cursor: pointer;
  }

  > button.option:hover {
    background: green;
  }
`;

export const Wrapper = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    padding-top: 5.3%;
    padding-right: 0.3%;
  }

  > div h1 {
    margin: auto;
    margin-top: 3%;
    margin-bottom: 3%;
  }

  > div.full {
    padding-left: 2.5%;
  }

  > div.notFull {
    padding-left: 12.5%;
  }
`;

export const Footer = styled.div``;
