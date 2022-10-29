import React, { memo, useMemo } from 'react';

import { Wrapper, SpanStyled, Ending } from './styled';

function SubFooterWithoutMemo() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      <Wrapper>
        <SpanStyled>Private policy</SpanStyled>
        <SpanStyled>Term of us</SpanStyled>
      </Wrapper>
      <Ending>
        ©<data>{year}</data>
        <span>Ensome. All Rights Reserved.</span>
      </Ending>
    </>
  );
}

export const SubFooter = memo(SubFooterWithoutMemo);
