import React from 'react';

import { Logo3, Logo4, Logo5, Logo6, Logo7, WildWood } from 'static';

import { Wrapper } from './styled';

export function Customers({ isBrighter }: { isBrighter?: boolean }) {
  return (
    <Wrapper $filter={isBrighter}>
      <WildWood />
      <Logo7 />
      <Logo3 />
      <Logo4 />
      <Logo5 />
      <Logo6 />
    </Wrapper>
  );
}
