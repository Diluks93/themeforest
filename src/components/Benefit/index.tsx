import React, { memo, PropsWithChildren } from 'react';

import { Wrapper, Title, Description } from './styled';

function BenefitWithoutMemo({
  children,
  title,
  description,
}: PropsWithChildren<{ title: string; description: string }>) {
  return (
    <Wrapper>
      {children}
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
}

export const Benefit = memo(BenefitWithoutMemo);
