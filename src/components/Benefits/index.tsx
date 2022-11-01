import React, { memo, PropsWithChildren } from 'react';

import { Brain, Upper, Key, Analytic } from 'static';

import { Wrapper, Title, Description, BenefitsStyled } from './styled';

const description =
  'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.';

const benefits = [
  { title: 'Machine learning', description, icon: <Brain /> },
  { title: 'Embed analytics', description, icon: <Upper /> },
  { title: 'Access control', description, icon: <Key /> },
  { title: 'Data analytics', description, icon: <Analytic /> },
];

function BenefitWithoutMemo({
  children,
  title,
  description: descr,
}: PropsWithChildren<{ title: string; description: string }>) {
  return (
    <Wrapper>
      {children}
      <Title>{title}</Title>
      <Description>{descr}</Description>
    </Wrapper>
  );
}

const Benefit = memo(BenefitWithoutMemo);

function BenefitsWithoutMemo() {
  return (
    <BenefitsStyled>
      {benefits.map(benefit => (
        <Benefit {...benefit} children={benefit.icon} key={benefit.title} />
      ))}
    </BenefitsStyled>
  );
}

export const Benefits = memo(BenefitsWithoutMemo);
