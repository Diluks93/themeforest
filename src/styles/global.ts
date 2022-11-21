import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Manrope';
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
      width: 5px;
      background-color: ${({ theme }) => theme.colors.background};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: ${({ theme }) => theme.borderRadius}px;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.families[1]};
  }

  #root {
    width: 100vw;
  }
`;
