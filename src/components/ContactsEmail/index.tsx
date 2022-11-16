import React, { PropsWithChildren } from 'react';

import { EmailStyled } from './styled';

export function ContactsEmail({
  grey,
  flex,
  children,
}: PropsWithChildren<{ grey?: boolean; flex?: boolean }>) {
  return (
    <EmailStyled href="mailto:ensome@info.co.us" $grey={grey} $flex={flex}>
      {children}
      ensome@info.co.us
    </EmailStyled>
  );
}
