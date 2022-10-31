import React, { memo, PropsWithChildren } from 'react';

import { useScrollSmooth } from 'hooks/useScrollSmooth';

import { SectionStyled } from './styled';

function SectionWithoutMemo({
  children,
  id,
  odd,
  background,
  height,
  full,
  col,
}: PropsWithChildren<{
  odd?: boolean;
  full?: boolean;
  col?: boolean;
  id?: string;
  background?: string;
  height?: number;
}>) {
  const ref = useScrollSmooth(id);

  return (
    <SectionStyled
      ref={ref}
      id={id}
      $odd={odd}
      $background={background}
      $height={height}
      $full={full}
      $col={col}
    >
      {children}
    </SectionStyled>
  );
}

export const Section = memo(SectionWithoutMemo);
