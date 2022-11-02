import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SubTitle = styled.h2`
  font-size: 38px;
  height: fit-content;
  line-height: 56px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  font-weight: 800;
  text-align: center;
`;

export const Description = styled.p`
  position: relative;

  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  width: 540px;
  text-align: center;

  color: ${({ theme }) => theme.colors.grey};
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;
