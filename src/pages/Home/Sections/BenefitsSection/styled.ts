import styled from 'styled-components';

import { Container } from 'styles';
import { SectionStyled } from 'components/Section/styled';

export const Section = styled(SectionStyled)``;

export const ContainerStyled = styled(Container)`
  padding: ${({ theme }) => theme.sizes.container.paddings[2]}px 0;
  column-gap: ${({ theme }) => theme.gaps[8]}px;
  flex-direction: row;
`;
