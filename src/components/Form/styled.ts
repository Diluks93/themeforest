import { ButtonStyled } from 'components/Button/styled';
import styled from 'styled-components';

export const FormStyled = styled.form`
  width: 540px;
  height: 352px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  column-gap: 20px;
`;

export const Button = styled(ButtonStyled)`
  width: ${({ theme }) => theme.sizes.button.width[1]}px;
`;
