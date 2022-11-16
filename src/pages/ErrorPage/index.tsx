import React from 'react';
import { useLocation } from 'react-router-dom';

import { Main } from 'styles/shared';
import { useScrollSmooth } from 'hooks/useScrollSmooth';

import { SubTitle } from 'pages/Home/Sections/FeaturesSection/styled';
import { Wrapper } from './styled';

export default function ErrorPage() {
  const { pathname } = useLocation();
  const ref = useScrollSmooth(pathname);

  return (
    <Main id={pathname} ref={ref}>
      <Wrapper>
        <SubTitle>Work in progress</SubTitle>
      </Wrapper>
    </Main>
  );
}
