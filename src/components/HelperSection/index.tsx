import React from 'react';
import { Link } from 'react-router-dom';

import { PathsToPage } from 'constants/';
import { BlockTitle } from 'styles';

import { Button, ContainerStyled, DescriptionStyled, Section } from './styled';

export function HelperSection() {
  return (
    <Section $odd>
      <ContainerStyled>
        <BlockTitle>Do you need help?</BlockTitle>
        <DescriptionStyled>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam
          corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
        </DescriptionStyled>
        <Button>
          <Link to={PathsToPage.CONTACTS}>Contact Us</Link>
        </Button>
      </ContainerStyled>
    </Section>
  );
}
