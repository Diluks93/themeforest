import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ $left?: boolean }>`
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
  color: ${({ theme }) => theme.colors.grey};
`;

export const LastCrumb = styled.span`
  ${styles}
  color: ${({ theme }) => theme.colors.black};
  text-transform: capitalize;
`;

export const Divider = styled.span`
  ${styles}
  color: ${({ theme }) => theme.colors.grey};
`;
