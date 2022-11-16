import React from 'react';

import {
  Section,
  OverviewSection,
  BreadCrumb,
  MainTitle,
  CardService,
} from 'components';
import { serviceCards } from 'constants/';
import { Main } from 'styles';

import { ContainerStyled } from './styled';

export default function ServicesPage() {
  return (
    <Main>
      <Section id="services">
        <ContainerStyled>
          <BreadCrumb left />
          <MainTitle subtitle="Services" title="Data Analytics Services" />
        </ContainerStyled>
      </Section>
      <Section>
        <ContainerStyled $row>
          {serviceCards.map(card => (
            <CardService {...card} key={card.title} id={card.title} />
          ))}
        </ContainerStyled>
      </Section>
      <OverviewSection service />
    </Main>
  );
}
