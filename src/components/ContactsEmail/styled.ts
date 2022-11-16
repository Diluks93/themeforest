import styled, { css } from 'styled-components';

import { pathArrowRight } from 'static';

export const styles = css<{ $grey?: boolean; $flex?: boolean }>`
  ${({ $grey }) =>
    $grey
      ? css`
          color: ${({ theme }) => theme.colors.footer};
        `
      : css`
          color: ${({ theme }) => theme.colors.white};
        `}

  ${({ $flex, theme }) =>
    $flex
      ? css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          font-weight: ${theme.fonts.weights[0]};
          gap: 12px;
        `
      : css``}
`;

export const EmailStyled = styled.a<{ $grey?: boolean; $flex?: boolean }>`
  letter-spacing: ${({ theme }) => theme.fonts.spacings[1]}em;
  display: flex;
  column-gap: ${({ theme }) => theme.gaps[0]}px;
  justify-content: space-between;
  align-items: center;

  &::after {
    ${({ $grey }) =>
      $grey
        ? css``
        : css`
            content: '';
          `};
    background-image: url(${pathArrowRight});
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    filter: grayscale(1);
  }

  ${styles}
  ${({ $grey }) =>
    $grey
      ? css`
          font-weight: ${({ theme }) => theme.fonts.weights[0]};
        `
      : css`
          font-weight: ${({ theme }) => theme.fonts.weights[2]};
        `}
`;
