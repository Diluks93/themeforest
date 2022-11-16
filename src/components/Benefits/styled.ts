import styled from 'styled-components';

import { Description } from 'styles';

export const Wrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.families[0]};
  letter-spacing: ${({ theme }) => theme.fonts.spacings[1]}em;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${({ theme }) => theme.sizes.benefit.padding[0]}px;
  gap: ${({ theme }) => theme.gaps[5]}px;

  width: ${({ theme }) => theme.sizes.benefit.width[0]}px;
  height: ${({ theme }) => theme.sizes.benefit.height[0]}px;

  background: ${({ theme }) => theme.colors.white};

  box-shadow: ${({ theme }) => theme.shadows.button};
  border-radius: ${({ theme }) => theme.borderRadius}px;

  svg {
    fill: ${({ theme }) => theme.colors.primary};
    transform: scale(1.1);
  }
`;

export const BenefitTitle = styled.h4`
  font-weight: ${({ theme }) => theme.fonts.weights[3]};
  font-size: ${({ theme }) => theme.fonts.sizes[3]}px;
  line-height: ${({ theme }) => theme.fonts.heights[2]}px;

  color: ${({ theme }) => theme.colors.black};
`;

export const DescriptionStyled = styled(Description)`
  font-family: ${({ theme }) => theme.fonts.families[1]};
  font-weight: ${({ theme }) => theme.fonts.weights[0]};
  font-size: ${({ theme }) => theme.fonts.sizes[1]}px;
  line-height: ${({ theme }) => theme.fonts.heights[0]}px;
`;

export const BenefitsStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1;
  max-height: calc(
    ${({ theme }) => theme.sizes.benefit.height[0]}px * 2 +
      ${({ theme }) => theme.gaps[10]}px * 2
  );
  gap: ${({ theme }) => theme.gaps[8]}px;
  align-content: center;

  & div:nth-child(3) {
    margin-top: ${({ theme }) => theme.sizes.container.paddings[2] / 2}px;
  }
`;
