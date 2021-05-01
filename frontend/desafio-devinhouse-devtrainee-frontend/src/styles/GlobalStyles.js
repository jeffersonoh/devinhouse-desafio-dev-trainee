import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: change 10s ease-in-out infinite;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*, input, button {
  font-family: 'Roboto', sans-serif;
}

@keyframes change {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;
