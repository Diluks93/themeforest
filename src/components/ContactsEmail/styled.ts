import styled, { css } from 'styled-components';

import { pathArrowRight } from 'static';

import { StyledContactProp } from './prop';

export const styles = css<StyledContactProp>`
  ${({ $grey, $black, theme }) => {
    switch (true) {
      case $grey:
        return css`
          color: ${theme.colors.footer};
        `;
      case $black:
        return css`
          color: ${theme.colors.black};
        `;
      default:
        return css`
          color: ${theme.colors.white};
        `;
    }
  }};

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

export const EmailStyled = styled.a<StyledContactProp>`
  letter-spacing: ${({ theme }) => theme.fonts.spacings[1]}em;
  display: flex;
  column-gap: ${({ theme }) => theme.gaps[0]}px;
  justify-content: space-between;
  align-items: center;

  &::after {
    ${({ $grey, $black }) =>
      $grey || $black
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
  ${({ $grey, $black, theme }) =>
    $grey || $black
      ? css`
          font-weight: ${theme.fonts.weights[0]};
        `
      : css`
          font-weight: ${theme.fonts.weights[2]};
        `}
`;
