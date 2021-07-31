import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --wine: #A50034;

    --white-text-title: #FFFFFF;

    --gray-text-body: #A3A3A3;
    --black-text-body: #413906;

    --price-value: #C8C6CD;
    --price-month: #9FA5B6;

    --background: #1E2025;
    --background-300: #41424E;

    --plan-background: #434450;
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
  }

  html, body {
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
