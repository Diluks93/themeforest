import styled from 'styled-components';

import { SectionStyled } from 'components/Section/styled';
import { Container } from 'styles';

export const Section = styled(SectionStyled)`
  padding: ${({ theme }) => theme.sizes.container.paddings[2]}px 0;
  row-gap: ${({ theme }) => theme.gaps[12]}px;
  flex-direction: column;
`;

export const ContainerStyled = styled(Container)`
  row-gap: ${({ theme }) => theme.gaps[17]}px;
`;

export const CardsStyled = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps[8]}px;
`;
