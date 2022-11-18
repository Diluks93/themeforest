import { BlockTitleStyled } from 'components/Controls/styled';
import styled, { css } from 'styled-components';

import { Container } from 'styles';

export const ContainerStyled = styled(Container)`
  row-gap: ${({ theme }) => theme.gaps[12]}px;
  padding: ${({ theme }) => theme.gaps[12]}px 0;
  flex-wrap: nowrap;

  ${BlockTitleStyled} {
    font-size: ${({ theme }) => theme.fonts.sizes[7]}px;
    font-weight: ${({ theme }) => theme.fonts.weights[4]};
    line-height: ${({ theme }) => theme.fonts.heights[6]}px;

    letter-spacing: ${({ theme }) => theme.fonts.spacings[1]}em;
  }
`;

export const Block = styled.div<{ $reverse?: boolean }>`
  height: 440px;
  display: flex;
  gap: ${({ theme }) => theme.gaps[8]}px;

  ${({ $reverse }) =>
    $reverse
      ? css`
          flex-direction: row-reverse;
        `
      : css`
          flex-direction: row;
        `}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: ${({ theme }) => theme.gaps[8]}px;
`;

export const Image = styled.img`
  width: ${({ theme }) => theme.sizes.image.width[0]}px;
  height: ${({ theme }) => theme.sizes.image.height[0]}px;

  border-radius: ${({ theme }) => theme.borderRadius}px;
`;
