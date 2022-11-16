import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    scroll-behavior: smooth;
    font-style: normal;
    overflow-x: hidden;
  }

  body {
    min-height: 100vh;
    display: grid;
    place-content: center;
    text-align: center;

    &::-webkit-scrollbar {
      width: 0;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  #root {
    width: 100vw;
  }
`;
