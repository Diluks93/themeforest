import React, { PropsWithChildren } from 'react';

import { PathsToPage } from 'constants/';
import { ContactsPhone, ContactsEmail, ContactsAddress } from 'components';

import { ContactsStyled, Wrapper, LinkStyled } from './styled';

export function Contacts({ children }: PropsWithChildren) {
  return (
    <ContactsStyled>
      {children}
      <Wrapper>
        <Wrapper $col $reverse>
          <ContactsPhone />
          <ContactsEmail />
        </Wrapper>
        <Wrapper $col>
          <ContactsAddress />
          <LinkStyled to={PathsToPage.MAP}>Driving directions</LinkStyled>
        </Wrapper>
      </Wrapper>
    </ContactsStyled>
  );
}
