import React, { Fragment } from 'react';

import { statistics } from 'constants/';
import { Statistic } from 'components';

import { StatisticListStyled, Divider } from './styled';

export function StatisticList() {
  return (
    <StatisticListStyled>
      {statistics.map((statistic, i, arr) => {
        const lastIndex = arr.length - 1;
        const hasLastDivider = lastIndex !== i ? <Divider /> : null;

        [arr[1], arr[lastIndex]] = [arr[lastIndex], arr[1]];

        return (
          <Fragment key={statistic.id}>
            <Statistic {...statistic} isCenter />
            {hasLastDivider}
          </Fragment>
        );
      })}
    </StatisticListStyled>
  );
}
