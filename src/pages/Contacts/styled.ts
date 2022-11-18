import styled, { css } from 'styled-components';

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes[10]}px;
  line-height: ${({ theme }) => theme.fonts.heights[8]}px;
  letter-spacing: ${({ theme }) => theme.fonts.spacings[1]}em;
  color: ${({ theme }) => theme.colors.black};
  width: ${({ theme }) => theme.sizes.title.width[0]}px;
  font-weight: ${({ theme }) => theme.fonts.weights[4]};
`;

export const Labeling = styled.span<{ $grey?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.families[0]};
  font-size: ${({ theme }) => theme.fonts.sizes[1]}px;
  line-height: ${({ theme }) => theme.fonts.heights[0]}px;

  text-align: right;
  letter-spacing: ${({ theme }) => theme.fonts.spacings[0]}em;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.gaps[4]}px;

  ${({ $grey, theme }) =>
    $grey
      ? css`
          color: ${theme.colors.grey};
          font-weight: ${theme.fonts.weights[0]};
          svg {
            fill: ${theme.colors.grey};
          }
        `
      : css`
          color: ${theme.colors.black};
          font-weight: ${theme.fonts.weights[2]};
          svg {
            fill: ${theme.colors.black};
          }
        `}
`;
