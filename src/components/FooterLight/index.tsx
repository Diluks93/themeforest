import React, { RefObject } from 'react';

import {
  ColumnFooter,
  Social,
  Contacts,
  QuickLink,
  SubFooter,
  useToggleLightMode,
} from 'components';
import { useDropdown } from 'hooks/useDropDown';
import { services, information, about } from 'constants/';

import { FooterStyled, ContainerStyled, Wrapper, Line, Title } from './styled';
import { LogoBlue } from 'static';

export function FooterLight() {
  const { containerRef, isOpen, toggleOpen, renderDropdown } = useDropdown();
  const { toggleLightMode } = useToggleLightMode();

  return (
    <FooterStyled>
      <ContainerStyled>
        <Wrapper>
          <LogoBlue onClick={toggleLightMode} />
          <Wrapper $row>
            <ColumnFooter listPaths={about} startOrder={2}>
              <Title>About</Title>
            </ColumnFooter>
            <ColumnFooter listPaths={information} startOrder={2}>
              <Title>Information</Title>
            </ColumnFooter>
            <ColumnFooter
              listPaths={services}
              startOrder={4}
              ref={containerRef as RefObject<HTMLUListElement>}
            >
              <Title>Service</Title>
              {renderDropdown(
                <QuickLink isOpen={isOpen} onClick={toggleOpen} $grey>
                  Pages
                </QuickLink>
              )}
            </ColumnFooter>
          </Wrapper>
        </Wrapper>
        <Line />
        <Wrapper $col>
          <Contacts>
            <Title>Contacts</Title>
          </Contacts>
          <Social>
            <Title>Social</Title>
          </Social>
        </Wrapper>
        <Line />
        <Wrapper $col>
          <SubFooter />
        </Wrapper>
      </ContainerStyled>
    </FooterStyled>
  );
}
