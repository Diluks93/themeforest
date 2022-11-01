import React, { memo } from 'react';

import { Section, EmailField } from 'components';
import { Container } from 'styles';

import { Wrapper, Title, Description } from './styled';

export function SubscriberSectionWithoutMemo() {
  return (
    <Section>
      <Container $flex>
        <Wrapper>
          <Title>Subscribe to our newsletter</Title>
          <Description>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </Description>
        </Wrapper>
        <EmailField />
      </Container>
    </Section>
  );
}

export const SubscriberSection = memo(SubscriberSectionWithoutMemo);
