import styled, { css } from 'styled-components';

const sameStyles = css`
  width: 159px;
  font-family: 'Open Sans';
  font-style: normal;
`;

export const Number = styled.span`
  height: 56px;

  font-weight: 700;
  font-size: 50px;
  line-height: 112px;

  display: flex;
  align-items: center;
  letter-spacing: -0.025em;
  justify-content: center;

  color: ${({ theme }) => theme.colors.primary};

  ${sameStyles}
`;

export const Description = styled.span`
  height: 28px;

  font-weight: 400;
  font-size: 16px;
  line-height: 28px;

  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};

  ${sameStyles}
`;

export const StatisticStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
