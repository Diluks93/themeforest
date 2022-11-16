import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

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
  left: -10px;
  bottom: -75%;
  transform: translateY(50%);
  background-color: ${({ theme }) => theme.colors.white};
  width: ${({ theme }) => theme.sizes.button.width[2]}px;
  height: ${({ theme }) => theme.sizes.button.width[2]}px;
`;

export const FillButton = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};

  ${size};
  ${flex};

  &:hover {
    box-shadow: ${({ theme }) =>
      theme.type === 'light' ? theme.shadows.button : ''};
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

export const Button = styled(Link)`
  border: 1px ${({ theme }) => theme.colors.white} solid;
  background-color: transparent;
  font-family: ${({ theme }) => theme.fonts.families[0]};
  font-weight: ${({ theme }) => theme.fonts.weights[1]};
  font-size: ${({ theme }) => theme.fonts.sizes[1]}px;
  color: ${({ theme }) => theme.colors.white};

  ${size};
  ${flex};
`;
