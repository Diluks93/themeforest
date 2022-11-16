import styled from 'styled-components';

import { Container } from 'styles';

export const ContainerStyled = styled(Container)`
  padding-bottom: ${({ theme }) => theme.sizes.container.paddings[2]}px;
`;
