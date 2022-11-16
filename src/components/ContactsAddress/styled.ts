import styled, { css } from 'styled-components';

export const AddressStyled = styled.address<{ $grey?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.families[1]};
  font-weight: ${({ theme }) => theme.fonts.weights[0]};
  font-size: ${({ theme }) => theme.fonts.sizes[1]}px;
  line-height: ${({ theme }) => theme.fonts.heights[0]}px;
  letter-spacing: ${({ theme }) => theme.fonts.spacings[1]}em;
  color: ${({ theme }) => theme.colors.white};
  font-style: normal;

  ${({ $grey }) =>
    $grey
      ? css`
          color: ${({ theme }) => theme.colors.footer};
          text-align: left;
        `
      : css`
          color: ${({ theme }) => theme.colors.white};
        `}
`;
