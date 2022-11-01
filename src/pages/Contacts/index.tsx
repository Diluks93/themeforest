import React from 'react';

import { BreadCrumb, ContactForm, Section } from 'components';
import { Container } from 'styles';

import map from 'static/images/map.webp';

import { Mark, Title } from './styled';

export default function ContactsPage() {
  return (
    <>
      <Section id="contacts" col height={660}>
        <Container>
          <BreadCrumb left />
        </Container>
        <Container $flex $align>
          <Title>
            How can we <Mark>help you?</Mark>
          </Title>
          <ContactForm />
        </Container>
        <Container></Container>
      </Section>
      <Section background={map} height={460} odd />
    </>
  );
}
