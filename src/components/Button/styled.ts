import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 14px;
  gap: ${({ theme }) => theme.gaps[0]}px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  fill: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 6px;

  width: ${({ theme }) => theme.sizes.button.width}px;
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
