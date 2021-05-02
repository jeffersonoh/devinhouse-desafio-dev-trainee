import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    min-height: 100%;
    background-color: var(--background);
  }
  
  h1, h2, span, p, a, button, input {
    border: 0;
    background: none;
    font-family: "Roboto", sans-serif;
    color: var(--text);
  }
  
  ul {
    list-style: none;
  }
  
  :root {
    --primary: #133991;
    --secondary: #0591E8;
    --text: #666666;
    --background: #DFDFDF;
  }

  h1 {
    font-size: 36px;
    font-weight: 500;
  }

  @media screen and (max-width: 575px) {
    h1 {
      font-size: 24px;
      font-weight: 500;
    }
  }
`;
 