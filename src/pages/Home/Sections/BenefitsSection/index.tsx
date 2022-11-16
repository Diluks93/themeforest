import React from 'react';

import { description } from 'constants/';
import { BlockTitle, Description } from 'styles';
import { Benefits } from 'components';
import { Wrapper } from 'pages/Home/styled';

import { Section, ContainerStyled } from './styled';

export function BenefitsSection() {
  return (
    <Section $odd>
      <ContainerStyled>
        <Wrapper>
          <BlockTitle>The benefits of Ensome</BlockTitle>
          <Description children={description} />
        </Wrapper>
        <Benefits />
      </ContainerStyled>
    </Section>
  );
}
