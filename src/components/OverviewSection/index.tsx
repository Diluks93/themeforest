import React from 'react';

import { Customers, Statistic, Section } from 'components';
import { description, statistics } from 'constants/';

import {
  Wrapper,
  DescriptionStyled,
  ContainerStyled,
  BlockTitleStyled,
} from './styled';

export function OverviewSection({ service }: { service?: boolean }) {
  return (
    <Section overviewSection col>
      <BlockTitleStyled $service={service}>
        We provide services that guarantee your success
      </BlockTitleStyled>
      <ContainerStyled $service={service}>
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
