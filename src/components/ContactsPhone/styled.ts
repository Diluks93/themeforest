import styled from 'styled-components';

import { styles } from 'components/ContactsEmail/styled';

export const PhoneStyled = styled.a<{ $grey?: boolean; $flex?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.families[1]};
  font-weight: ${({ theme }) => theme.fonts.weights[0]};
  font-size: ${({ theme }) => theme.fonts.sizes[1]}px;
  line-height: ${({ theme }) => theme.fonts.heights[0]}px;
  letter-spacing: ${({ theme }) => theme.fonts.spacings[1]}em;

  ${styles}
`;
