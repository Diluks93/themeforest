import React from 'react';

import { BreadCrumb, MainTitle, Section, Tab } from 'components';
import { Container } from 'styles';

const questions = [
  'What are data analytics?',
  'What is data mining?',
  'What is business intelligence?',
  'What is exploratory data analysis (EDA)?',
  'What is confirmatory data analysis (CDA)?',
  'What are predictive analytics?',
  'What is data visualisation',
];

export default function FAQPage() {
  return (
    <>
      <Section height={400} id="faq">
        <Container>
          <BreadCrumb left />
          <MainTitle subtitle="FAQs" title="Frequently asked questions" />
        </Container>
      </Section>
      <Section height={1200}>
        <Container>
          {questions.map((question, i) => (
            <Tab question={question} key={i} />
          ))}
        </Container>
      </Section>
    </>
  );
}
