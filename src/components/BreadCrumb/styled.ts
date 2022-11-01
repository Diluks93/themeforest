import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ $left?: boolean }>`
  display: flex;
  justify-content: center;
  width: 100%;
  column-gap: 9px;

  ${({ $left }) =>
    $left
      ? css`
          justify-content: left;
        `
      : css``}
`;

const styles = css`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  letter-spacing: -0.01em;
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
