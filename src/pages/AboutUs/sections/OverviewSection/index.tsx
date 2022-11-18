import React, { Fragment } from 'react';

import { Section, Statistic } from 'components';
import { statistics } from 'constants/';
import { Title } from 'components/MainTitle/styled';

import { ContainerStyled } from '../SubHeaderSection/styled';
import { Wrapper, Divider } from './styled';

export function OverviewSection() {
  const renderStatistics = statistics.map((statistic, i, arr) => {
    const lastIndex = arr.length - 1;
    const hasLastDivider = lastIndex !== i ? <Divider /> : null;

    [arr[1], arr[lastIndex]] = [arr[lastIndex], arr[1]];

    return (
      <Fragment key={statistic.id}>
        <Statistic {...statistic} isCenter />
        {hasLastDivider}
      </Fragment>
    );
  });

  return (
    <Section odd col>
      <ContainerStyled>
        <Title>Ensome in numbers</Title>
        <Wrapper>{renderStatistics}</Wrapper>
      </ContainerStyled>
    </Section>
  );
}
