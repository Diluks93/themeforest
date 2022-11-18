import React from 'react';

import { BreadCrumb, Section } from 'components';
import { Title } from 'components/MainTitle/styled';

import { ContainerStyled } from './styled';

export function SubHeaderSection() {
  return (
    <Section odd id="about">
      <ContainerStyled>
        <Title>About Us</Title>
        <BreadCrumb />
      </ContainerStyled>
    </Section>
  );
}
