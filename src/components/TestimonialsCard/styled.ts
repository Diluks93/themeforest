import styled, { css } from 'styled-components';

import { Description } from 'styles';

export const CardStyled = styled.div<{ $isBig?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: ${({ theme }) => theme.sizes.card.padding[0]}px;
  gap: ${({ theme }) => theme.gaps[7]}px;
  height: ${({ theme }) => theme.sizes.card.height[0]}px;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.card};

  ${({ $isBig, theme }) =>
    $isBig
      ? css`
          width: ${theme.sizes.card.width[1]}px;
        `
      : css`
          width: ${theme.sizes.card.width[0]}px;
        `}
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: ${({ theme }) => theme.gaps[7]}px;
`;

export const Name = styled.span`
  color: ${({ theme }) => theme.colors.black};
`;

export const Post = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weights[1]};
  font-size: ${({ theme }) => theme.fonts.sizes[1]}px;
  letter-spacing: ${({ theme }) => theme.fonts.spacings[0]}em;
  color: ${({ theme }) => theme.colors.grey};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.families[0]};
  font-weight: ${({ theme }) => theme.fonts.weights[3]};
  font-size: ${({ theme }) => theme.fonts.sizes[2]}px;
  line-height: ${({ theme }) => theme.fonts.heights[0]}px;
  letter-spacing: ${({ theme }) => theme.fonts.spacings[1]}em;
  row-gap: ${({ theme }) => theme.gaps[0]}px;
`;

export const DescriptionStyled = styled(Description)`
  font-size: ${({ theme }) => theme.fonts.sizes[2]}px;
  line-height: ${({ theme }) => theme.fonts.heights[1]}px;
  text-align: left;
`;
