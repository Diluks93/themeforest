import styled from 'styled-components';

import { ButtonStyled } from 'components/Button/styled';

export const FormStyled = styled.form`
  flex: 1;
  height: 352px;
  display: flex;
  gap: ${({ theme }) => theme.gaps[6]}px;
  flex-direction: column;
  align-items: flex-end;
  padding-top: ${({ theme }) => theme.gaps[5]}px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  column-gap: ${({ theme }) => theme.gaps[6]}px;
`;

export const Button = styled(ButtonStyled)`
  width: ${({ theme }) => theme.sizes.button.width[1]}px;
`;
