import React, { Fragment } from 'react';

import { Section } from 'components';

import { Container } from 'styles';
import { Divider } from 'components/StatisticList/styled';
import { statistics } from 'constants/';

import {
  StatisticListStyled,
  StatisticStyled,
  Number,
  Description,
} from './styled';

export function OverviewSection() {
  return (
    <Section primary>
      <Container>
        <StatisticListStyled>
          {statistics.map(({ id, number, description }, i, arr) => {
            const lastIndex = arr.length - 1;
            const hasLastDivider = lastIndex !== i ? <Divider /> : null;

            [arr[1], arr[lastIndex]] = [arr[lastIndex], arr[1]];

            return (
              <Fragment key={id}>
                <StatisticStyled $center>
                  <Number $large>{number}</Number>
                  <Description $bold>{description}</Description>
                </StatisticStyled>
                {hasLastDivider}
              </Fragment>
            );
          })}
        </StatisticListStyled>
      </Container>
    </Section>
  );
}
