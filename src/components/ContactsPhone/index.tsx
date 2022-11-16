import React, { PropsWithChildren } from 'react';

import { PhoneStyled } from './styled';

export function ContactsPhone({
  grey,
  flex,
  children,
}: PropsWithChildren<{ grey?: boolean; flex?: boolean }>) {
  return (
    <PhoneStyled href="tel:+1 601-201-5580" $grey={grey} $flex={flex}>
      {children}
      +1 601-201-5580
    </PhoneStyled>
  );
}
