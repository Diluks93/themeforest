import styled from 'styled-components';

import { Button } from 'components/ContactUsForm/styled';
import { BlockTitle } from 'styles';

export const FormStyled = styled.form`
  flex: 1;
  height: 593px;
  margin-left: 95px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 34px;

  padding: 67px 50px 31px;

  background: ${({ theme }) => theme.colors.background};

  box-shadow: ${({ theme }) => theme.shadows.form};
  border-radius: ${({ theme }) => theme.borderRadius}px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.gaps[6]}px;
  width: 100%;
  align-items: stretch;
`;

export const FormTitle = styled(BlockTitle)`
  text-align: left;
  width: 100%;
  align-items: flex-start;
  font-size: 30px;
`;

export const ButtonForm = styled(Button)`
  height: ${({ theme }) => theme.sizes.button.height[0]}px;
  align-self: flex-end;
  margin-top: auto;
`;
