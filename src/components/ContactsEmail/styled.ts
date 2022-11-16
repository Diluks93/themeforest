import styled, { css } from 'styled-components';

import { pathArrowRight } from 'static';

export const EmailStyled = styled.a<{ $grey?: boolean }>`
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

  ${({ $grey }) =>
    $grey
      ? css`
          color: ${({ theme }) => theme.colors.footer};
          font-weight: ${({ theme }) => theme.fonts.weights[0]};
        `
      : css`
          color: ${({ theme }) => theme.colors.white};
          font-weight: ${({ theme }) => theme.fonts.weights[2]};
        `}
`;
