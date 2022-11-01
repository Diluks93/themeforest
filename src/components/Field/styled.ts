import styled from 'styled-components';

export const FieldStyled = styled.input`
  width: 100%;
  height: 54px;
  display: flex;
  align-items: flex-start;
  padding: 15px 91px 15px 25px;

  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 6px;
`;

export const FieldsetStyled = styled.fieldset`
  width: 100%;
  height: fit-content;
  border: none;
`;
