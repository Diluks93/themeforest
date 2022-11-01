import React from 'react';

import {
  Section,
  OverviewSection,
  BreadCrumb,
  MainTitle,
  CardService,
} from 'components';
import {
  BigAnalytic,
  BigBrain,
  BigData,
  BigIntelligence,
  BigKey,
  BigUpper,
} from 'static';
import { Container } from 'styles';

const services = [
  { title: 'Machine learning', icon: <BigBrain /> },
  { title: 'Embed analytics', icon: <BigAnalytic /> },
  { title: 'Access control', icon: <BigKey /> },
  { title: 'Data analytics', icon: <BigData /> },
  { title: 'Big data consulting', icon: <BigUpper /> },
  { title: 'Artificial intelligence', icon: <BigIntelligence /> },
];

export default function ServicesPage() {
  return (
    <>
      <Section height={400} id="services">
        <Container>
          <BreadCrumb left />
          <MainTitle />
        </Container>
      </Section>
      <Section>
        <Container $row>
          {services.map(service => (
            <CardService {...service} key={service.title} />
          ))}
        </Container>
      </Section>
      <OverviewSection />
    </>
  );
}
