import styled, { css } from 'styled-components';

import { Container, BlockTitle } from 'styles';

export const ContainerStyled = styled(Container)`
  padding: ${({ theme }) => theme.sizes.container.paddings[2]}px 0;
`;

export const Title = styled(BlockTitle)`
  flex: 1;
  font-size: 30px;
  letter-spacing: ${({ theme }) => theme.fonts.spacings[1]}em;
  line-height: ${({ theme }) => theme.fonts.heights[4]}px;
  font-weight: ${({ theme }) => theme.fonts.weights[4]};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  row-gap: 30px;
`;

export const Buttons = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0px;
  column-gap: 26px;
`;

export const Button = styled.button<{ $color?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;

  width: 190px;
  height: 54px;

  border-radius: 6px;

  ${({ $color, theme }) =>
    $color
      ? css`
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors.white};
        `
      : css`
          background: ${theme.colors.white};
          color: ${theme.colors.primary};
          border: 1px solid ${theme.colors.primary};
        `}
`;
