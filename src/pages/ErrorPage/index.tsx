import React from 'react';
import { useLocation } from 'react-router-dom';

import { Section } from 'components';
import { Wrapper, ErrorTitle } from './styled';

export default function ErrorPage() {
  const { pathname } = useLocation();

  return (
    <Section id={pathname}>
      <Wrapper>
        <ErrorTitle>Work in progress</ErrorTitle>
      </Wrapper>
    </Section>
  );
}
