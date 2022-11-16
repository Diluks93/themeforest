import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const PricingStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 35px 20px;
  gap: 30px;

  width: 260px;
  height: 525px;

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
    li {
      color: ${({ theme }) => theme.colors.white};
    }

    svg {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.gaps[5]}px;
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
  font-size: ${({ theme }) => theme.fonts.sizes[2]}px;
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
  font-size: ${({ theme }) => theme.fonts.sizes[5]}px;
  line-height: 40px;
  letter-spacing: -0.015em;

  color: ${({ theme }) => theme.colors.black};
`;

export const Buttons = styled.nav`
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
  height: 32px;

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
  font-size: 14px;
  padding: 0px;
  gap: 7px;

  color: ${({ theme }) => theme.colors.black};

  svg {
    fill: ${({ theme }) => theme.colors.primary};
    transform: scale(1.3);
  }
`;

export const CardsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 30px;
`;
