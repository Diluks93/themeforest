import React from 'react';

import { PhoneStyled } from './styled';

export function ContactsPhone({ grey }: { grey?: boolean }) {
  return (
    <PhoneStyled href="tel:+1 601-201-5580" $grey={grey}>
      +1 601-201-5580
    </PhoneStyled>
  );
}
