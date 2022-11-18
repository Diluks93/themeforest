import styled, { css } from 'styled-components';

import { styles } from 'components/ContactsEmail/styled';
import { StyledContactProp } from 'components/ContactsEmail/prop';

export const AddressStyled = styled.address<StyledContactProp>`
  font-family: ${({ theme }) => theme.fonts.families[1]};
  font-weight: ${({ theme }) => theme.fonts.weights[0]};
  font-size: ${({ theme }) => theme.fonts.sizes[1]}px;
  line-height: ${({ theme }) => theme.fonts.heights[0]}px;
  letter-spacing: ${({ theme }) => theme.fonts.spacings[1]}em;
  color: ${({ theme }) => theme.colors.white};
  font-style: normal;
  cursor: pointer;

  ${({ $grey, $black }) =>
    $black || $grey
      ? css`
          text-align: left;
          a {
            ${styles}
          }
        `
      : css``}
`;
