import React from 'react';

import {
  BreadCrumb,
  ContactForm,
  ContactsEmail,
  ContactsPhone,
  ContactsAddress,
  MapboxMap,
  Section,
} from 'components';
import { ContainerStyled } from 'pages/Services/styled';
import { Container, Main, Mark } from 'styles';
import { Call, Location, Mail } from 'static';

import { Title, Labeling } from './styled';

export default function ContactsPage() {
  return (
    <Main>
      <Section id="contacts" col>
        <Container>
          <BreadCrumb left />
        </Container>
        <Container $flex $align>
          <Title>
            How can we <Mark>help you?</Mark>
          </Title>
          <ContactForm />
        </Container>
        <ContainerStyled $flex $left>
          <ContactsEmail grey flex>
            <Labeling>
              <Mail /> Email
            </Labeling>
          </ContactsEmail>
          <ContactsPhone grey flex>
            <Labeling>
              <Call /> Phone
            </Labeling>
          </ContactsPhone>
          <ContactsAddress grey flex>
            <Labeling>
              <Location /> Address
            </Labeling>
          </ContactsAddress>
        </ContainerStyled>
      </Section>
      <MapboxMap />
    </Main>
  );
}
