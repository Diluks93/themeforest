import styled, { css } from 'styled-components';

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

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.families[1]};
  font-weight: ${({ theme }) => theme.fonts.weights[0]};
  font-size: ${({ theme }) => theme.fonts.sizes[3]}px;
  line-height: ${({ theme }) => theme.fonts.heights[3]}px;

  color: ${({ theme }) => theme.colors.grey};
`;

export const Mark = styled.mark`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
`;

export const BlockTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes[6]}px;
  letter-spacing: ${({ theme }) => theme.fonts.spacings[1]}em;
  color: ${({ theme }) => theme.colors.black};
`;

export const Main = styled.main`
  max-width: inherit;
  min-height: 100vh;
  height: fit-content;
  font-family: ${({ theme }) => theme.fonts.families[1]};
`;
