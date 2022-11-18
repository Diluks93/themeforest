import React from 'react';

import { Customers, Statistic, Section } from 'components';
import { description, statistics } from 'constants/';

import {
  Wrapper,
  DescriptionStyled,
  ContainerStyled,
  BlockTitleStyled,
} from './styled';

const MAXIMUM_QUANTITY = 3;

export function OverviewSection({ service }: { service?: boolean }) {
  const renderStatistics = statistics
    .slice(0, MAXIMUM_QUANTITY)
    .map(statistic => <Statistic key={statistic.id} {...statistic} />);

  return (
    <Section overviewSection col>
      <BlockTitleStyled $service={service}>
        We provide services that guarantee your success
      </BlockTitleStyled>
      <ContainerStyled $service={service}>
        <Wrapper $row>
          <Wrapper>{renderStatistics}</Wrapper>
          <DescriptionStyled children={description} />
        </Wrapper>
        <Customers />
      </ContainerStyled>
    </Section>
  );
}
