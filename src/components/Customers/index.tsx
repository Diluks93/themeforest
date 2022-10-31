import React, { memo } from 'react';
import { Logo3, Logo4, Logo5, Logo6, Logo7, WildWood } from 'static';

function CustomersWithoutMemo() {
  return (
    <div>
      <WildWood />
      <Logo3 />
      <Logo4 />
      <Logo5 />
      <Logo6 />
      <Logo7 />
    </div>
  );
}

export const Customers = memo(CustomersWithoutMemo);
