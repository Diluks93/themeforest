import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const ListItemStyled = styled(Link)<{ order: number }>`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.footer};
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

export const Wrapper = styled.ul<{ $column?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: ${({ theme }) => theme.gaps[6]}px;

  ${({ $column }) =>
    $column
      ? css`
          flex-direction: column;
          row-gap: ${({ theme }) => theme.gaps[4]}px;
        `
      : css``}
`;
