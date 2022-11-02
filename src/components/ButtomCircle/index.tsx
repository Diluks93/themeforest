import React, { PropsWithChildren } from 'react';

import { PathsToPage } from 'constants/';

import { Button, ButtonCircleStyled, FillButton } from './styled';

export function ButtonCircle({
  children,
  path,
}: PropsWithChildren<{ path: PathsToPage }>) {
  return (
    <ButtonCircleStyled>
      <FillButton>
        <Button to={path}>{children}</Button>
      </FillButton>
    </ButtonCircleStyled>
  );
}
