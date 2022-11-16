import styled, { css } from 'styled-components';

export const Labeling = styled.label`
  width: 445px;
  height: 54px;

  display: flex;
`;

export const InputStyled = styled.input<{ $error?: boolean }>`
  width: 100%;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  border: none;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fonts.sizes[1]}px;
  line-height: 24px;

  letter-spacing: -0.015em;

  padding: 15px 25px;

  &::placeholder {
    color: black;
  }

  &:hover {
    background: #eceff2;
    color: grey;
    &::placeholder {
      color: grey;
    }
  }

  &:focus {
    outline: none;
    color: black;
  }

  ${({ $error, theme }) =>
    $error
      ? css`
          background: #f6e2e2;
          color: ${theme.colors.error};
        `
      : css`
          color: black;
          background: ${theme.colors.steel};
        `}
`;

export const Button = styled.button`
  position: relative;

  width: 119px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 46px;

  background: white;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  border: none;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes[2]}px;
  line-height: 24px;

  letter-spacing: -0.015em;
  color: black;

  &::before {
    content: '';
    position: absolute;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    height: 100%;
    width: 6px;
    left: 0px;
    transform: translateX(-50%);
    background: white;
  }

  &:hover {
    box-shadow: ${({ theme }) =>
      theme.type === 'light' ? '0px 12px 30px rgba(24, 92, 255, 0.18)' : ''};
    color: ${({ theme }) => theme.colors.white};
    opacity: ${({ theme }) => (theme.type === 'light' ? '0.8' : '')};
  }

  &:active {
    opacity: 1;
    color: ${({ theme }) => theme.colors.black};
  }
`;
