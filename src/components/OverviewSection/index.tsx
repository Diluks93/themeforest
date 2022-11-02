import React from 'react';

import { Section, Customers, Statistic } from 'components';
import { Container } from 'styles';

import { SubTitle, Wrapper, Description } from './styled';

export function OverviewSection() {
  return (
    <Section col height={620}>
      <SubTitle>We provide services that guarantee your success</SubTitle>
      <Container>
        <Wrapper $row>
          <Wrapper $col>
            <Statistic number="1830+" description="Project executed" />
            <Statistic number="834+" description="Satisfied customers" />
            <Statistic number="390" description="Data management" />
          </Wrapper>
          <Description>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quaeab illo inventore. Donec tincidunt tempor quam, non mollis
            finibus nec.
          </Description>
        </Wrapper>
        <Customers />
      </Container>
    </Section>
  );
}
