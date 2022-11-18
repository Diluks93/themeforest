import React from 'react';

import { ContactProp } from 'components/ContactsEmail/prop';
import { AddressStyled } from './styled';

export function ContactsAddress({ grey, black, flex, children }: ContactProp) {
  return (
    <AddressStyled $grey={grey} $black={black} $flex={flex}>
      <a
        href="https://goo.gl/maps/pNeKrDXwvQEsKQXW7"
        target="_blank"
        rel="noreferrer"
      >
        {children}
        1642 Washington Avenue, Jackson, MS, 39201
      </a>
    </AddressStyled>
  );
}
