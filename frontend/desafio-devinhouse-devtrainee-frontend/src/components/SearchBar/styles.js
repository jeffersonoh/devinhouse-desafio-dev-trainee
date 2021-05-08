import styled, { css } from "styled-components";

import { ImSearch } from "react-icons/im";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: auto;
  background: whitesmoke;
  border-radius: 6px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
  border: 2px solid green;
  border-radius: 6px;
`;

export const Input = styled.div`
  height: 100%;
  width: 95%;

  > input {
    width: 100%;
    height: 100%;
    padding: 5px 5px;
    outline: none;
    border: none;
    background: transparent;
    border-bottom: 2px solid green;

    color: green;
    font-size: medium;
    font-weight: 500;
    letter-spacing: 1px;

    &::placeholder {
      color: green;
      font-size: medium;
      font-weight: 500;
      letter-spacing: 1px;
    }

    &:focus {
      &::placeholder {
        color: whitesmoke;
      }
    }
  }
  @media (max-width: 541px) {
    height: 100%;
    > input::placeholder {
      font-size: 10.8px;
    }
  }
`;

export const SearchButton = styled.div`
  width: 5%;
  padding: 5px 5px;
  border-bottom: 2px solid green;

  > button {
    background: transparent;
    border: none;
    width: 100%;
    height: 100%;
    margin: auto;
    cursor: pointer;
  }
`;

const iconCSS = css`
  height: 20px;
  width: 20px;
  flex-shrink: 0;
  fill: green;
`;

export const SearchIcon = styled(ImSearch)`
  ${iconCSS}
`;
