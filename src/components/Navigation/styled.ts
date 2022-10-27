import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: ${({ theme }) => theme.gaps[1]}px;
  width: ${({ theme }) => theme.sizes.navigation.width}px;

  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

export const ListItemStyled = styled(NavLink)<{ order: number }>`
  text-decoration: none;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.grey};
  order: ${({ order }) => (order === 2 ? '4' : order + 1)};

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
    font-weight: 500;
  }

  &.active {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.black};
    border-bottom: ${({ theme }) =>
      theme.type === 'dark' ? `1px solid ${theme.colors.black}` : 'none'};
  }
`;

export const QuickLink = styled.span<{ isOpen: boolean }>`
  color: ${({ theme }) => theme.colors.grey};
  fill: ${({ theme }) => theme.colors.grey};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  column-gap: 3px;
  cursor: pointer;

  #small_chevron {
    rotate: ${({ isOpen }) => (isOpen ? '180deg' : '0')};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
    fill: ${({ theme }) => theme.colors.grey};
    font-weight: 500;
  }

  ${({ isOpen }) =>
    isOpen
      ? css`
          font-weight: 500;
          color: ${({ theme }) => theme.colors.black};
          fill: ${({ theme }) => theme.colors.grey};
          border-bottom: ${({ theme }) =>
            theme.type === 'dark' ? `1px solid ${theme.colors.black}` : 'none'};
        `
      : ''};
`;
