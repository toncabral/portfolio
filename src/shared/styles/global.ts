import styled, { createGlobalStyle } from 'styled-components';

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
    background: #1E0548;
    background: radial-gradient(78.61% 201.24% at 16.7% 64.5%, #1E0548 0.22%, #452F69 100%);
    -webkit-font-smoothing: antialised;
    color: #EBEBEB;
  }

  h1, h2, h3 {
    font-family: Poppins, sans-serif;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  h2 {
    font-size: 1.5rem;
  }

  h2, h3 {
    font-weight: 600; 
  }

  h3 {
    font-size: 1.125rem;
  }

  p {
    font-size: 1.125rem;
    font-weight: normal;
  }
`;
