import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --wine: #A50034;
    --gold: #835c12;
    --gold-light: #BE9850;
  }
 
  * {    
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font-family: 'Helvetica', sans-serif;
    font-weight: 400;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;

    @media (max-width: 568px) {
      .sign-up-modal {
        height: 90vh !important;
        width: 90vw !important;
        padding: 20px !important;
      }
    }
  }

  html, body, #root {
    height: 100%;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
