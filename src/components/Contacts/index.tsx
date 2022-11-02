import React, { memo, PropsWithChildren } from 'react';

import { PathsToPage } from 'constants/';

import {
  ContactsStyled,
  Wrapper,
  Phone,
  Email,
  LinkStyled,
  Address,
} from './styled';

function ContactsWithoutMemo({ children }: PropsWithChildren) {
  return (
    <ContactsStyled>
      {children}
      <Wrapper>
        <Wrapper $col $reverse>
          <Phone href="tel:+1 601-201-5580">+1 601-201-5580</Phone>
          <Email href="mailto:ensome@info.co.us">ensome@info.co.us</Email>
        </Wrapper>
        <Wrapper $col>
          <Address>1642 Washington Avenue, Jackson, MS, 39201</Address>
          <LinkStyled to={PathsToPage.MAP} $visible>
            Driving directions
          </LinkStyled>
        </Wrapper>
      </Wrapper>
    </ContactsStyled>
  );
}

export const Contacts = memo(ContactsWithoutMemo);
