import React from 'react';
import { StatisticProp } from './prop';

import { Number, Description, StatisticStyled } from './styled';

export function Statistic({ number, description, isCenter }: StatisticProp) {
  return (
    <StatisticStyled $center={isCenter}>
      <Number $large={isCenter}>{number}</Number>
      <Description $bold={isCenter}>{description}</Description>
    </StatisticStyled>
  );
}
