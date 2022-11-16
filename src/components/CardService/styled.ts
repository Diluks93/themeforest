import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 35px;
  gap: 20px;

  width: 540px;
  height: 317px;

  border-radius: 6px;
`;

export const Title = styled.h3`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes[4]}px;
  line-height: 33px;

  letter-spacing: -0.015em;

  color: ${({ theme }) => theme.colors.black};
`;

export const Description = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes[2]}px;
  line-height: 28px;

  letter-spacing: -0.015em;

  color: ${({ theme }) => theme.colors.grey};
`;

export const StyledLink = styled(Link)`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fonts.sizes[1]}px;
  text-decoration: none;
  line-height: 24px;

  display: flex;
  align-items: center;
  letter-spacing: -0.01em;

  color: ${({ theme }) => theme.colors.primary};

  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;
