import React from 'react';

import { SubTitle, Title, Description } from './styled';

export function MainTitle({
  subtitle,
  title,
}: {
  subtitle: string;
  title: string;
}) {
  return (
    <>
      <SubTitle>{subtitle}</SubTitle>
      <Title>{title}</Title>
      <Description>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab
        illo inventore.
      </Description>
    </>
  );
}
