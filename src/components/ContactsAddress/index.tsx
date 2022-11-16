import React from 'react';

import { AddressStyled } from './styled';

export function ContactsAddress({ grey }: { grey?: boolean }) {
  return (
    <AddressStyled $grey={grey}>
      1642 Washington Avenue, Jackson, MS, 39201
    </AddressStyled>
  );
}
