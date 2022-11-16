import React from 'react';

import { Customers, Statistic } from 'components';
import { BlockTitle } from 'styles';
import { description, statistics } from 'constants/';

import { Wrapper, Section, DescriptionStyled, ContainerStyled } from './styled';

function Statistics() {
  return (
    <Wrapper>
      {statistics.map(statistic => (
        <Statistic key={statistic.id} {...statistic} />
      ))}
    </Wrapper>
  );
}

export function OverviewSection() {
  return (
    <Section $col>
      <BlockTitle>We provide services that guarantee your success</BlockTitle>
      <ContainerStyled>
        <Wrapper $row>
          <Statistics />
          <DescriptionStyled children={description} />
        </Wrapper>
        <Customers />
      </ContainerStyled>
    </Section>
  );
}
