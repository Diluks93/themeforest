import styled, { css } from 'styled-components';

const sameStyles = css`
  font-family: ${({ theme }) => theme.fonts.families[1]};
  font-style: normal;
`;

export const Number = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weights[3]};
  font-size: ${({ theme }) => theme.fonts.sizes[8]}px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.primary};

  ${sameStyles}
`;

export const Description = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weights[0]};
  font-size: ${({ theme }) => theme.fonts.sizes[2]}px;
  line-height: ${({ theme }) => theme.fonts.heights[1]}px;

  letter-spacing: ${({ theme }) => theme.fonts.spacings[1]}em;
  color: ${({ theme }) => theme.colors.grey};

  ${sameStyles}
`;

export const StatisticStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
