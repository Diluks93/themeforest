import styled from 'styled-components';

import { Container } from 'styles';

export const ContainerStyled = styled(Container)`
  row-gap: ${({ theme }) => theme.gaps[17]}px;
`;

export const CardsStyled = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps[8]}px;
`;
