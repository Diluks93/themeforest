import styled, { css } from 'styled-components';

import { pathArrowRight } from 'static';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 286px;
`;

export const SpanStyled = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weights[2]};
  letter-spacing: ${({ theme }) => theme.fonts.spacings[0]}em;
  color: ${({ theme }) => theme.colors.footer};
  display: flex;
  column-gap: ${({ theme }) => theme.gaps[0]}px;
  justify-content: space-between;
  align-items: center;

  &::after {
    ${({ theme }) =>
      theme.type === 'light'
        ? css``
        : css`
            content: '';
          `};
    background-image: url(${pathArrowRight});
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    filter: grayscale(1) opacity(0.8);
  }
`;

export const Ending = styled.div`
  display: flex;
  column-gap: ${({ theme }) => theme.gaps[0]}px;
  font-family: ${({ theme }) => theme.fonts.families[1]};
  font-weight: ${({ theme }) => theme.fonts.weights[0]};
  font-size: ${({ theme }) => theme.fonts.sizes[1]}px;
  line-height: ${({ theme }) => theme.fonts.heights[0]}px;
  letter-spacing: ${({ theme }) => theme.fonts.spacings[1]}em;
  color: ${({ theme }) => theme.colors.footer};
`;
