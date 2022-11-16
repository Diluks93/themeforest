import React from 'react';

import { Wrapper, SpanStyled, Ending } from './styled';

export function SubFooter() {
  return (
    <>
      <Wrapper>
        <SpanStyled>Private policy</SpanStyled>
        <SpanStyled>Term of us</SpanStyled>
      </Wrapper>
      <Ending>
        ©<data>2022</data>
        <span>Ensome. All Rights Reserved.</span>
      </Ending>
    </>
  );
}
