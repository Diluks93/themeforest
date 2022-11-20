import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ $left?: boolean; $secondary?: boolean }>`
  display: flex;
  width: 100%;
  column-gap: ${({ theme }) => theme.gaps[2]}px;
  margin-bottom: 50px;

  ${({ $left }) =>
    $left
      ? css`
          justify-content: left;
          padding: 20px 0 0;
        `
      : css`
          justify-content: center;
          padding: 10px 0 0;
        `}

  ${({ $secondary, theme }) =>
    $secondary
      ? css`
          color: ${theme.colors.white};
        `
      : css`
          color: ${theme.colors.grey};
        `}
`;

const styles = css`
  font-family: ${({ theme }) => theme.fonts.families[0]};
  font-weight: ${({ theme }) => theme.fonts.weights[1]};
  font-size: ${({ theme }) => theme.fonts.sizes[1]}px;
  line-height: ${({ theme }) => theme.fonts.heights[0]}px;

  letter-spacing: ${({ theme }) => theme.fonts.spacings[0]}em;
`;

export const FirstCrumb = styled.span`
  ${styles}
`;

export const LastCrumb = styled.span<{ $secondary?: boolean }>`
  ${styles}
  text-transform: capitalize;

  ${({ $secondary, theme }) =>
    $secondary
      ? css`
          color: ${theme.colors.white};
        `
      : css`
          color: ${theme.colors.black};
        `}
`;

export const Divider = styled.span`
  ${styles}
`;
