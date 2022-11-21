import React from 'react';

import {
  BreadCrumb,
  ContactsEmail,
  ContactsPhone,
  ContactsAddress,
  ContactUsForm,
  MapboxMap,
  Section,
} from 'components';
import { withValidationForm } from 'HOCs';
import { ContainerStyled } from 'pages/Services/styled';
import { Container, Mark } from 'styles';
import { Call, Location, Mail } from 'static';

import { Title, Labeling } from './styled';

const ContactForm = withValidationForm(ContactUsForm);

export default function ContactsPage() {
  return (
    <>
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
    </>
  );
}
