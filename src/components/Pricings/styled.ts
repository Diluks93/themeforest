import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const PricingStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 35px 20px;
  gap: 30px;

  width: 260px;

  background: ${({ theme }) => theme.colors.white};

  box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
  border-radius: 6px;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};

    a,
    button {
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.primary};
    }

    h4,
    span,
    ul {
      color: ${({ theme }) => theme.colors.white};
    }

    svg {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 10px 14px;
  gap: ${({ theme }) => theme.gaps[0]}px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  fill: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 6px;

  width: 100%;
  height: ${({ theme }) => theme.sizes.button.height}px;

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

export const Title = styled.h4`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: -0.015em;

  color: ${({ theme }) => theme.colors.black};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  width: 100%;
`;

export const Price = styled.span`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  line-height: 40px;
  letter-spacing: -0.015em;

  color: ${({ theme }) => theme.colors.black};
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
`;

export const Button = styled.button<{ $color?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  gap: 10px;

  width: 41px;

  border-radius: 6px;

  ${({ $color, theme }) =>
    $color
      ? css`
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors.white};
        `
      : css`
          background: ${theme.colors.white};
          color: ${theme.colors.primary};
          border: 1px solid ${theme.colors.primary};
        `}
`;

export const Services = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 15px;
`;

export const Service = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 7px;

  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

export const CardsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 30px;
`;
