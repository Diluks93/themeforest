import styled, { css } from 'styled-components';

export const StatisticListStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 70px 0;

  width: 100%;
`;

const styles = css`
  font-family: ${({ theme }) => theme.fonts.families[1]};
  font-style: normal;
`;

export const Number = styled.span<{ $large?: boolean }>`
  font-weight: ${({ theme }) => theme.fonts.weights[4]};
  font-size: ${({ theme }) => theme.fonts.sizes[8]}px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.white};

  ${styles}

  ${({ $large }) =>
    $large
      ? css`
          font-size: ${({ theme }) => theme.fonts.sizes[9]}px;
        `
      : css`
          font-size: ${({ theme }) => theme.fonts.sizes[8]}px;
        `}
`;

export const Description = styled.span<{ $bold?: boolean }>`
  font-weight: ${({ theme }) => theme.fonts.weights[0]};
  font-size: ${({ theme }) => theme.fonts.sizes[2]}px;
  line-height: ${({ theme }) => theme.fonts.heights[1]}px;

  letter-spacing: ${({ theme }) => theme.fonts.spacings[1]}em;
  color: ${({ theme }) => theme.colors.white};

  ${styles}

  ${({ $bold }) =>
    $bold
      ? css`
          font-weight: ${({ theme }) => theme.fonts.weights[2]};
        `
      : css`
          font-weight: ${({ theme }) => theme.fonts.weights[0]};
        `}
`;

export const StatisticStyled = styled.div<{ $center?: boolean }>`
  display: flex;
  flex-direction: column;

  ${({ $center, theme }) =>
    $center
      ? css`
          align-items: center;
          row-gap: ${theme.gaps[1]}px;
          width: 255px;
        `
      : css`
          align-items: flex-start;
        `}
`;
