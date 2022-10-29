import styled, { css } from 'styled-components';

export const FooterStyled = styled.footer`
  height: ${({ theme }) => theme.sizes.footer.height}px;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  font-family: 'Manrope';
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
`;

export const Wrapper = styled.div<{
  $row?: boolean;
  $col?: boolean;
  $reverse?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: ${({ theme }) => theme.gaps[6]}px;

  ${({ $row }) =>
    $row
      ? css`
          flex-direction: row;
          width: 445px;
          column-gap: ${({ theme }) => theme.gaps[0]}px;
        `
      : css``}

  ${({ $col }) =>
    $col
      ? css`
          width: 100%;
          column-gap: ${({ theme }) => theme.gaps[5]}px;
        `
      : css``}

  ${({ theme, $reverse }) =>
    theme.type === 'dark' && $reverse
      ? css`
          flex-direction: row-reverse;
        `
      : css``}
`;

export const Line = styled.hr`
  height: 0;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.steel};
`;

export const Paragraph = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  text-align: left;
  color: ${({ theme }) => theme.colors.steel};
`;
