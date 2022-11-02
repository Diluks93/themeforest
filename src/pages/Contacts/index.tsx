import React from 'react';

import { BreadCrumb, ContactForm, Section } from 'components';
import { Container } from 'styles';

import map from 'static/images/map.webp';
import { Call, Location, Mail } from 'static';

import { Address, Email, Mark, Phone, Title, Labeling } from './styled';

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
        <Container $flex $left>
          <Email href="mailto:ensome@info.co.us">
            <Labeling>
              <Mail /> Email
            </Labeling>
            ensome@info.co.us
          </Email>
          <Phone href="tel:+1 601-201-5580">
            <Labeling>
              <Call /> Phone
            </Labeling>
            +1 601-201-5580
          </Phone>
          <Address>
            <Labeling>
              <Location /> Address
            </Labeling>
            1642 Washington Avenue, Jackson, MS, 39201
          </Address>
        </Container>
      </Section>
      <Section background={map} height={460} odd />
    </>
  );
}
