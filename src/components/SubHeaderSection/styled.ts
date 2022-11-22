import styled from 'styled-components';

import { Container } from 'styles';

export const ContainerStyled = styled(Container)`
  padding: ${({ theme }) => theme.sizes.container.paddings[3]}px 0;
`;
