import styled from 'styled-components';

import { Container } from 'styles';

export const ContainerStyled = styled(Container)`
  row-gap: ${({ theme }) => theme.gaps[12]}px;
  padding: ${({ theme }) => theme.gaps[12]}px 0;
  flex-wrap: nowrap;
`;
