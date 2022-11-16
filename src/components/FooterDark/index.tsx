import React, { RefObject } from 'react';

import {
  useToggleLightMode,
  SubFooter,
  ColumnFooter,
  Social,
  QuickLink,
  ContactsPhone,
  ContactsEmail,
  ContactsAddress,
} from 'components';
import { quickLinks, services } from 'constants/';
import { LogoWhite } from 'static';
import { useDropdown } from 'hooks/useDropDown';

import { FooterStyled, Line, Title } from 'components/FooterLight/styled';
import {
  ContainerStyled,
  Paragraph,
  FooterLogoBlock,
  WrapperFooterDark as Wrapper,
  ContactList,
} from './styled';

export function FooterDark() {
  const { containerRef, isOpen, toggleOpen, renderDropdown } = useDropdown();
  const { toggleLightMode } = useToggleLightMode();

  return (
    <FooterStyled>
      <ContainerStyled>
        <Wrapper>
          <FooterLogoBlock>
            <LogoWhite onClick={toggleLightMode} />
            <Paragraph>
              Ut enim ad minima veniam, quis nostrum exercitationem
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
            </Paragraph>
            <Social />
          </FooterLogoBlock>
          <Wrapper $row>
            <ColumnFooter listPaths={quickLinks} startOrder={2}>
              <Title>Quick Link</Title>
            </ColumnFooter>
            <ColumnFooter
              listPaths={services}
              startOrder={2}
              ref={containerRef as RefObject<HTMLUListElement>}
            >
              <Title>Service</Title>
              {renderDropdown(
                <QuickLink isOpen={isOpen} onClick={toggleOpen}>
                  Pages
                </QuickLink>
              )}
            </ColumnFooter>
            <ContactList>
              <Title>Contacts Info</Title>
              <ContactsPhone grey />
              <ContactsEmail grey />
              <ContactsAddress grey />
            </ContactList>
          </Wrapper>
        </Wrapper>
        <Line />
        <Wrapper $col $reverse>
          <SubFooter />
        </Wrapper>
      </ContainerStyled>
    </FooterStyled>
  );
}
