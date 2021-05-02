import styled, { css } from "styled-components";

css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;

export const Body = styled.div`
  height: 70vh;
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: red;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transform-origin: center;
  animation: rotate 2s ease forwards infinite;
  @keyframes rotate {
    0% {
      background: #00e5ff;
      transform: rotate(0deg);
    }
    25% {
      background: #aa00ff;
    }
    50% {
      background: #0761ff;
      transform: rotate(0deg);
    }
    100% {
      background: #00e5ff;
      transform: rotate(360deg);
    }
  }
`;

export const Circle = styled.div`
  background: red;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;

  &:nth-child(1) {
    left: -100px;
    animation: slideleft 2s ease forwards infinite;
  }

  &:nth-child(2) {
    left: 100px;
    top: -40px;
    animation: slideright 2s ease forwards infinite;
  }

  @keyframes slideleft {
    0% {
      background: #00e5ff;
      transform: translateX(0px);
    }
    25% {
      background: #aa00ff;
      transform: translateX(-100px);
    }
    50% {
      background: #0761ff;
      transform: translateX(0px);
    }
    100% {
      background: #00e5ff;
    }
  }

  @keyframes slideright {
    0% {
      background: #00e5ff;
      transform: translateX(0px);
    }
    25% {
      background: #aa00ff;
      transform: translateX(100px);
    }
    50% {
      background: #0761ff;
      transform: translateX(0px);
    }
    100% {
      background: #00e5ff;
    }
  }
`;

css``;
