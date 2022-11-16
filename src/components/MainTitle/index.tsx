import React from 'react';

import { SubTitle, Title, Wrapper, DescriptionStyled } from './styled';
import { MainTitleProp } from './prop';

export function MainTitle({ subtitle, title }: MainTitleProp) {
  return (
    <Wrapper>
      <SubTitle>{subtitle}</SubTitle>
      <Title>{title}</Title>
      <DescriptionStyled>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab
        illo inventore.
      </DescriptionStyled>
    </Wrapper>
  );
}
