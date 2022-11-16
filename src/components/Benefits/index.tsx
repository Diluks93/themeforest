import React from 'react';

import { benefits } from 'constants/';

import {
  Wrapper,
  BenefitTitle,
  DescriptionStyled,
  BenefitsStyled,
} from './styled';
import { BenefitProp } from './prop';

export function Benefits() {
  const benefitsComponent = benefits.map(
    ({ icon, title, description }: BenefitProp) => (
      <Wrapper key={title}>
        {icon}
        <BenefitTitle children={title} />
        <DescriptionStyled children={description} />
      </Wrapper>
    )
  );

  return <BenefitsStyled children={benefitsComponent} />;
}
