import React, { memo } from 'react';

import { Number, Description, StatisticStyled } from './styled';

function StatisticWithoutMemo({
  number,
  description,
}: {
  number: string;
  description: string;
}) {
  return (
    <StatisticStyled>
      <Number>{number}</Number>
      <Description>{description}</Description>
    </StatisticStyled>
  );
}

export const Statistic = memo(StatisticWithoutMemo);
