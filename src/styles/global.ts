import styled, { createGlobalStyle, css } from 'styled-components';

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

  #root {
    width: 100vw;
  }
`;

export const Container = styled.div<{
  $flex?: boolean;
  $unique?: boolean;
  $row?: boolean;
  $align?: boolean;
  $left?: boolean;
}>`
  max-width: ${({ theme }) => theme.sizes.container.width[4]}px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ $flex }) =>
    $flex
      ? css`
          column-gap: ${({ theme }) => theme.gaps[2]}px;
        `
      : css`
          flex-direction: column;
          row-gap: ${({ theme }) => theme.gaps[2]}px;
          column-gap: ${({ theme }) => theme.gaps[2]}px;
        `}

  ${({ $unique }) =>
    $unique
      ? css`
          column-gap: ${({ theme }) => theme.gaps[3]}px;
        `
      : css``}

  ${({ $row }) =>
    $row
      ? css`
          gap: 30px;
          flex-wrap: wrap;
          flex-direction: row;
        `
      : css``}

  ${({ $align }) =>
    $align
      ? css`
          align-items: flex-start;
        `
      : css``}

  ${({ $left }) =>
    $left
      ? css`
          justify-content: flex-start;
          gap: 47px;
        `
      : css``}

  @media ${({ theme }) => theme.media.large} {
    max-width: ${({ theme }) => theme.sizes.container.width[3]}px;
  }

  @media ${({ theme }) => theme.media.medium} {
    max-width: ${({ theme }) => theme.sizes.container.width[2]}px;
  }

  @media ${({ theme }) => theme.media.small} {
    max-width: ${({ theme }) => theme.sizes.container.width[1]}px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    max-width: ${({ theme }) => theme.sizes.container.width[0]}px;
  }
`;
