import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    outline: none;
    transition: 0.1s all ease-out;
    box-shadow: 0px 0px 0px 1px #0000;
  }

  *:focus:not(:active):not(:hover):not(input) {
    box-shadow: 0px 0px 0px 1px ${(props) => props.theme.colors.primary};
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    min-height: 100vh;
  }

  html {
    font-size: 12px;
  }
`;

export default GlobalStyle;
