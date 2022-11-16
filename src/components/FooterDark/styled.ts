import styled, { css } from 'styled-components';

import { Wrapper } from 'components/FooterLight/styled';
import { Container } from 'styles';

export const ContainerStyled = styled(Container)``;

export const WrapperFooterDark = styled(Wrapper)<{ $reverse?: boolean }>`
  column-gap: ${({ theme }) => theme.gaps[14]}px;

  ${({ $row, $reverse, theme }) => {
    switch (true) {
      case $row:
        return css`
          flex-direction: row;
          width: 613px;
          column-gap: ${theme.gaps[0]}px;
          margin-bottom: 50px;
        `;
      case $reverse:
        return css`
          margin-top: 34px;
          flex-direction: row-reverse;
        `;
      default:
        return css``;
    }
  }}
`;

export const FooterLogoBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.gaps[6]}px;
  width: 285px;
`;

export const Paragraph = styled.p`
  font-family: ${({ theme }) => theme.fonts.families[1]};
  font-weight: ${({ theme }) => theme.fonts.weights[0]};
  letter-spacing: ${({ theme }) => theme.fonts.spacings[1]}em;
  text-align: left;
  color: ${({ theme }) => theme.colors.footer};
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style-type: none;
  padding: 0px;
  gap: ${({ theme }) => theme.gaps[4]}px;

  width: 233px;
`;
