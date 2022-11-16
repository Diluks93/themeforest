import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: ${({ theme }) => theme.gaps[9]}px;
  width: ${({ theme }) => theme.sizes.navigation.width}px;

  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

export const ListItemStyled = styled(NavLink)<{ order: number }>`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.grey};
  order: ${({ order }) => (order === 2 ? '4' : order + 1)};
  width: ${({ theme }) => theme.sizes.navigation.itemWidth}px;
  letter-spacing: -0.015em;

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

export const QuickLink = styled.span<{ isOpen: boolean; $grey?: boolean }>`
  color: ${({ theme }) => theme.colors.grey};
  fill: ${({ theme }) => theme.colors.grey};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  column-gap: ${({ theme }) => theme.gaps[0]}px;
  width: ${({ theme }) => theme.sizes.navigation.itemWidth}px;
  cursor: pointer;
  letter-spacing: -0.015em;

  #small_chevron {
    rotate: ${({ isOpen }) => (isOpen ? '180deg' : '0')};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
    fill: ${({ theme }) => theme.colors.grey};
    font-weight: 500;
  }

  ${({ $grey, isOpen, theme }) => {
    switch (true) {
      case isOpen:
        return css`
          font-weight: 500;
          color: ${theme.colors.black};
          fill: ${theme.colors.grey};
          border-bottom: ${theme.type === 'dark'
            ? `1px solid ${theme.colors.black}`
            : 'none'};
        `;
      case $grey:
        return css`
          color: ${theme.colors.footer};
        `;
      default:
        return css``;
    }
  }}
`;
