import React from 'react';

import { EmailField } from 'components';

import {
  Wrapper,
  ContainerStyled,
  Section,
  BlockTitleStyled,
  DescriptionStyled,
} from './styled';

export function SubscriberSection() {
  return (
    <Section>
      <ContainerStyled>
        <Wrapper>
          <BlockTitleStyled>Subscribe to our newsletter</BlockTitleStyled>
          <DescriptionStyled>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </DescriptionStyled>
        </Wrapper>
        <EmailField />
      </ContainerStyled>
    </Section>
  );
}
