import React from 'react';

import { BreadCrumb, MainTitle, Section, Tab } from 'components';
import { ContainerStyled } from 'pages/Services/styled';
import { questions } from 'constants/';

export default function FAQPage() {
  return (
    <>
      <Section id="faq">
        <ContainerStyled>
          <BreadCrumb left />
          <MainTitle subtitle="FAQs" title="Frequently asked questions" />
        </ContainerStyled>
      </Section>
      <Section>
        <ContainerStyled $row>
          {questions.map((question, i) => (
            <Tab question={question} key={i} />
          ))}
        </ContainerStyled>
      </Section>
    </>
  );
}
