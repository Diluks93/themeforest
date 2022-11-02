import React, { RefObject } from 'react';

import {
  Logo,
  ColumnFooter,
  Social,
  Contacts,
  QuickLink,
  SubFooter,
  useToggleLightMode,
} from 'components';
import { useDropdown } from 'hooks/useDropDown';
import { PathsToPage } from 'constants/';
import { Container } from 'styles';

import { FooterStyled, Wrapper, Line, Title, Paragraph } from './styled';

const aboutColumn = [
  PathsToPage.HOME,
  PathsToPage.ABOUT_US,
  PathsToPage.SERVICES,
  PathsToPage.SOLUTIONS,
];

const informationColumn = [
  PathsToPage.CONTACTS,
  PathsToPage.TEAM,
  PathsToPage.BLOG,
  PathsToPage.FAQ,
];

const serviceColumn = [
  PathsToPage.ELEMENTS,
  PathsToPage.MAP,
  PathsToPage.PRICING,
  PathsToPage.FAQ,
];

export function Footer() {
  const { containerRef, isOpen, toggleOpen, renderDropdown } = useDropdown();
  const { isLightMode } = useToggleLightMode();

  return (
    <FooterStyled>
      <Container>
        <Wrapper>
          <Logo isOn={!isLightMode} />
          <Wrapper $row>
            <ColumnFooter listPaths={aboutColumn} startOrder={2}>
              <Title>About</Title>
            </ColumnFooter>
            <ColumnFooter listPaths={informationColumn} startOrder={2}>
              <Title>Information</Title>
            </ColumnFooter>
            <ColumnFooter
              listPaths={serviceColumn}
              startOrder={4}
              ref={containerRef as RefObject<HTMLDivElement>}
            >
              <Title>Service</Title>
              {renderDropdown(
                <QuickLink isOpen={isOpen} onClick={toggleOpen}>
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
            {!isLightMode ? (
              <Title>Social</Title>
            ) : (
              <Paragraph>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
              </Paragraph>
            )}
          </Social>
        </Wrapper>
        <Line />
        <Wrapper $col $reverse>
          <SubFooter />
        </Wrapper>
      </Container>
    </FooterStyled>
  );
}
