import { ContactProp } from 'components/ContactsEmail/prop';
import React from 'react';

import { PhoneStyled } from './styled';

export function ContactsPhone({ grey, black, flex, children }: ContactProp) {
  return (
    <PhoneStyled
      href="tel:+1 601-201-5580"
      $grey={grey}
      $flex={flex}
      $black={black}
    >
      {children}
      +1 601-201-5580
    </PhoneStyled>
  );
}
