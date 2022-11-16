import styled, { css } from 'styled-components';

import { Container } from 'styles';

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundFooter};
  display: flex;
  align-items: center;
  align-content: space-between;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.families[0]};
  font-weight: ${({ theme }) => theme.fonts.weights[2]};
  font-size: ${({ theme }) => theme.fonts.sizes[1]}px;
  line-height: ${({ theme }) => theme.fonts.heights[0]}px;
  letter-spacing: ${({ theme }) => theme.fonts.spacings[0]}em;
  padding: 56px 0 40px;
`;

export const ContainerStyled = styled(Container)`
  row-gap: ${({ theme }) => theme.gaps[9]}px;
`;

export const Title = styled.h3`
  font-weight: ${({ theme }) => theme.fonts.weights[3]};
  font-size: ${({ theme }) => theme.fonts.sizes[2]}px;
  letter-spacing: ${({ theme }) => theme.fonts.spacings[1]}em;
  color: ${({ theme }) => theme.colors.white};
`;

export const Wrapper = styled.div<{
  $row?: boolean;
  $col?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: ${({ theme }) => theme.gaps[16]}px;

  ${({ $row, $col, theme }) => {
    switch (true) {
      case $row:
        return css`
          flex-direction: row;
          width: 445px;
          column-gap: ${theme.gaps[0]}px;
        `;
      case $col:
        return css`
          width: 100%;
          column-gap: ${theme.gaps[5]}px;
        `;
      default:
        return css``;
    }
  }};
`;

export const Line = styled.hr`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.steel};
  width: 100%;
  border: none;
`;
