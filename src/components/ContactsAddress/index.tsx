import React, { PropsWithChildren } from 'react';

import { AddressStyled } from './styled';

export function ContactsAddress({
  grey,
  flex,
  children,
}: PropsWithChildren<{ grey?: boolean; flex?: boolean }>) {
  return (
    <AddressStyled $grey={grey} $flex={flex}>
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
