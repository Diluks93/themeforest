import React, { memo } from 'react';

import { Section, Button } from 'components';
import { PathsToPage } from 'constants/';
import { Container } from 'styles';

import { Description, StyledLink, SubTitle } from './styled';

function HelperSectionWithoutMemo() {
  return (
    <Section odd height={426}>
      <Container>
        <SubTitle>Do you need help?</SubTitle>
        <Description>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam
          corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
        </Description>
        <Button>
          <StyledLink to={PathsToPage.CONTACTS}>Contact Us</StyledLink>
        </Button>
      </Container>
    </Section>
  );
}

export const HelperSection = memo(HelperSectionWithoutMemo);
