import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: ${({ theme }) => theme.sizes.button.padding[0]}px;
  gap: ${({ theme }) => theme.gaps[3]}px;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  fill: ${({ theme }) => theme.colors.white};

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius}px;

  width: 100%;
  height: 100%;

  font-size: ${({ theme }) => theme.fonts.sizes[1]}px;
  font-weight: ${({ theme }) => theme.fonts.weights[1]};

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
