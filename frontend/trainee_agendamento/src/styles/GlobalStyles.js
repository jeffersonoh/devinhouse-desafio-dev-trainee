import { createGlobalStyle } from "styled-components";

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

  header {
    background-color: --primary;
    color: #FFF; 
  }

  ul {
    list-style: none;
  }

  :root {
    --primary: #133991;
    --secondary: #0591E8;
    --text: #666666;
    --background: #FFFFFF;
  }

  #root {
    background-color: var(--background);
  }

  h1 {
    font-size: 48px;
    font-weight: 600;
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
  }

  /* Modal */
.modal-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0,0,0,0.3);
}

.modal-box {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 30%;
  width: 60%;
  overflow-y: auto;
  background-color: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.25);
  z-index: 101;
  padding-top:15px;
  padding-bottom:15px;
  padding-left:20px;
  padding-right:20px;
}

.modal-header {
  display: flex;
  width: 100%;
}

.modal-title {
  width: 100%;
}

.closeModal {
  display: flex;
  width: 100%;
}

.close-button {
  margin-left: auto;
  margin-right: 5px;
  cursor: pointer;
}

.dp-none {
  display: none;
}

  @media screen and (max-width: 575px) {
    h1 {
      font-size: 24px;
      font-weight: 500;
    }
  }
`;
 