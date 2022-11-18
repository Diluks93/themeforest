import styled, { css } from 'styled-components';

import { styles } from 'components/Field/styled';

export const FieldsetStyled = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 13px;

  height: 59px;
  border: none;
  outline: none;
`;

export const LabelStyled = styled.label<{ $error?: boolean }>`
  font-size: ${({ theme }) => theme.fonts.sizes[0]}px;
  font-family: ${({ theme }) => theme.fonts.families[1]};
  text-transform: capitalize;

  ${({ $error, theme }) =>
    $error
      ? css`
          color: ${theme.colors.error};
        `
      : css`
          color: ${theme.colors.grey};
        `}
`;

export const FieldStyled = styled.input<{ $error?: boolean }>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 0 0 5.5px 0;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  outline: none;
  background: transparent;

  ${styles}

  &::placeholder {
    ${styles}
  }

  &:hover,
  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.black};
    &::placeholder {
      color: ${({ theme }) => theme.colors.grey};
    }
  }

  ${({ $error, theme }) =>
    $error
      ? css`
          border-bottom: 1px solid ${theme.colors.error};
          color: ${theme.colors.error};
        `
      : css``}
`;

export const Error = styled.span``;
