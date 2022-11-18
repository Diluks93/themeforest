import React from 'react';

import { ContactProp } from './prop';
import { EmailStyled } from './styled';

export function ContactsEmail({ grey, black, flex, children }: ContactProp) {
  return (
    <EmailStyled
      href="mailto:ensome@info.co.us"
      $grey={grey}
      $black={black}
      $flex={flex}
    >
      {children}
      ensome@info.co.us
    </EmailStyled>
  );
}
