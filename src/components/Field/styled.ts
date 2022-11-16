import styled, { css } from 'styled-components';

export const FieldStyled = styled.input<{
  $maxHeight?: boolean;
  $error?: boolean;
}>`
  width: 100%;
  height: 54px;
  display: flex;
  align-items: flex-start;
  padding: 15px 15px 15px 25px;

  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 6px;
  outline: none;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fonts.sizes[1]}px;

  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.hover};

  &::placeholder {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fonts.sizes[1]}px;

    letter-spacing: -0.015em;
    color: ${({ theme }) => theme.colors.hover};
  }

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.black};
    &::placeholder {
      color: ${({ theme }) => theme.colors.grey};
    }
  }

  ${({ $maxHeight }) =>
    $maxHeight
      ? css`
          height: 140px;
          &::placeholder {
            transform: translateY(-45px);
          }
        `
      : css``}

  ${({ $error }) =>
    $error
      ? css`
          border: 1px solid ${({ theme }) => theme.colors.error};
          color: ${({ theme }) => theme.colors.error};
        `
      : css``}
`;

export const FieldsetStyled = styled.fieldset`
  width: 100%;
  height: fit-content;
  border: none;
`;

export const Error = styled.span`
  font-size: small;
  color: ${({ theme }) => theme.colors.black};
`;
