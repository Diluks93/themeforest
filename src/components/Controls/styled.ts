import styled from 'styled-components';

import { BlockTitle } from 'styles';

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

export const BlockTitleStyled = styled(BlockTitle)`
  line-height: 100%;
  letter-spacing: ${({ theme }) => theme.fonts.spacings[0]}em;
`;

export const Buttons = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 15px;

  width: 235px;
  height: 60px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 15px 40px;
  gap: 10px;

  width: 110px;
  height: 60px;

  background: ${({ theme }) => theme.colors.tertiary};
  border: none;
  border-radius: 20px;

  svg {
    fill: ${({ theme }) => theme.colors.grey};
    width: 30px;
    height: 30px;
    filter: grayscale(1);
  }
`;
