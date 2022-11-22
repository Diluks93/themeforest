import React from 'react';

import {
  AboutUsForm,
  ContactsAddress,
  ContactsEmail,
  ContactsPhone,
  Section,
} from 'components';
import { BlockTitle, Description } from 'styles';

import { ContainerStyled } from '../../pages/AboutUs/sections/AboutUsSection/styled';
import { Labeling } from 'pages/Contacts/styled';
import { Wrapper, Block } from './styled';
import { withValidationForm } from 'HOCs';

const ContactForm = withValidationForm(AboutUsForm);

export function ContactUsSection() {
  return (
    <Section odd>
      <ContainerStyled $row>
        <Wrapper>
          <Block>
            <BlockTitle>
              Left questions? Contacts us now for a free consultation and free
              trial!
            </BlockTitle>
            <Description>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
            </Description>
          </Block>
          <Block>
            <ContactsEmail black flex>
              <Labeling $grey>Email address</Labeling>
            </ContactsEmail>
            <ContactsPhone black flex>
              <Labeling $grey>Phone number</Labeling>
            </ContactsPhone>
            <ContactsAddress black flex>
              <Labeling $grey>Address</Labeling>
            </ContactsAddress>
          </Block>
        </Wrapper>
        <ContactForm />
      </ContainerStyled>
    </Section>
  );
}
