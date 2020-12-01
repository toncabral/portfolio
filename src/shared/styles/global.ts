import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font: 100%/1.4 Cabin, sans-serif;
    scroll-behavior: smooth;

    @media screen and (max-width: 550px) {
      font: 87.5%/1.4 Cabin, sans-serif;
    }
  }

  @supports (font: -apple-system-body) {
    html {
      font: -apple-system-body;
    }
  }

  body {
    background-color: #1E0548;
    -webkit-font-smoothing: antialised;
    color: #EBEBEB;
  }
`;
