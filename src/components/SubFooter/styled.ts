import styled from 'styled-components';

import { pathArrowRight } from 'static';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 286px;
`;

export const SpanStyled = styled.span`
  text-decoration: none;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  column-gap: 3px;
  justify-content: space-between;
  align-items: center;

  &::after {
    content: '';
    background-image: url(${pathArrowRight});
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    filter: grayscale(1) opacity(0.8);
  }
`;

export const Ending = styled.div`
  display: flex;
  column-gap: 3px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
`;
