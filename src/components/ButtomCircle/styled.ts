import styled, { css } from 'styled-components';

import { NavLink } from 'react-router-dom';

const flex = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const size = css`
  width: calc(100% - 16px);
  height: calc(100% - 16px);
`;

export const ButtonCircleStyled = styled.span`
  ${flex};
  position: absolute;
  left: 0;
  bottom: -70%;
  transform: translateY(50%);
  background-color: ${({ theme }) => theme.colors.white};
  width: 140px;
  height: 140px;
`;

export const FillButton = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};

  ${size};
  ${flex};

  &:hover {
    box-shadow: ${({ theme }) =>
      theme.type === 'light' ? '0px 12px 30px rgba(24, 92, 255, 0.18)' : ''};
    color: ${({ theme }) => theme.colors.hoverButton};
    fill: ${({ theme }) => theme.colors.hoverButton};
    opacity: ${({ theme }) => (theme.type === 'light' ? '0.8' : '')};
  }

  &:active {
    opacity: 1;
    color: ${({ theme }) => theme.colors.hoverButton};
    fill: ${({ theme }) => theme.colors.hoverButton};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export const Button = styled(NavLink)`
  border: 1px ${({ theme }) => theme.colors.white} solid;
  background-color: transparent;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;

  ${size};
  ${flex};
`;
