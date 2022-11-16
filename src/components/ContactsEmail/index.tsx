import React from 'react';

import { EmailStyled } from './styled';

export function ContactsEmail({ grey }: { grey?: boolean }) {
  return (
    <EmailStyled href="mailto:ensome@info.co.us" $grey={grey}>
      ensome@info.co.us
    </EmailStyled>
  );
}
