import React from 'react';

import { Customers, Statistic, Section } from 'components';
import { BlockTitle } from 'styles';
import { description, statistics } from 'constants/';

import { Wrapper, DescriptionStyled, ContainerStyled } from './styled';

export function OverviewSection() {
  return (
    <Section overviewSection col>
      <BlockTitle>We provide services that guarantee your success</BlockTitle>
      <ContainerStyled>
        <Wrapper $row>
          <Wrapper>
            {statistics.map(statistic => (
              <Statistic key={statistic.id} {...statistic} />
            ))}
          </Wrapper>
          <DescriptionStyled children={description} />
        </Wrapper>
        <Customers />
      </ContainerStyled>
    </Section>
  );
}
