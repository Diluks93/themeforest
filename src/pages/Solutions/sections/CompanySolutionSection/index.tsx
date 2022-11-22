import React from 'react';
import { Link } from 'react-router-dom';

import { Section } from 'components';

import { Description } from 'styles';
import { PathsToPage } from 'constants/';

import { OurSolutions } from '../OurSolutions';
import { ContainerStyled, Title, Wrapper, Button, Buttons } from './styled';

export function CompanySolutionSection() {
  return (
    <Section col>
      <ContainerStyled $flex>
        <Title>
          Technology doesn't just help businesses — it allows them to extract
          business value from vast big of data.
        </Title>
        <Wrapper>
          <Description>
            Phasellus tristique eu nisl eu consectetur. Morbi urna massa,
            imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit,
            tincidunt aliquam ligula.
          </Description>
          <Buttons>
            <Button $color>See pricing</Button>
            <Link to={PathsToPage.CONTACTS}>
              <Button>Contact Us</Button>
            </Link>
          </Buttons>
        </Wrapper>
      </ContainerStyled>
      <OurSolutions />
    </Section>
  );
}
