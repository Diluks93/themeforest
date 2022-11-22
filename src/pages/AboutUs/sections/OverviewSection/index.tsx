import React from 'react';

import { Section, StatisticList } from 'components';
import { Title } from 'components/MainTitle/styled';

import { ContainerStyled } from './styled';

export function OverviewSection() {
  return (
    <Section odd col>
      <ContainerStyled>
        <Title>Ensome in numbers</Title>
        <StatisticList />
      </ContainerStyled>
    </Section>
  );
}
