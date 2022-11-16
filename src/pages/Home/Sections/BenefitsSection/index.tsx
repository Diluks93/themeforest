import React from 'react';

import { description } from 'constants/';
import { BlockTitle, Description } from 'styles';
import { Benefits, Section } from 'components';
import { Wrapper } from 'pages/Home/styled';

import { ContainerStyled } from './styled';

export function BenefitsSection() {
  return (
    <Section odd>
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
