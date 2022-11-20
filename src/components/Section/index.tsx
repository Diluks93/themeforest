import React, { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';

import { useScrollSmooth } from 'hooks/useScrollSmooth';
import { RootState } from 'store';

import { SectionStyled } from './styled';

export function Section({
  children,
  id,
  odd,
  full,
  col,
  primary,
  secondary,
  cardSection,
  featureSection,
  overviewSection,
}: PropsWithChildren<{
  odd?: boolean;
  full?: boolean;
  primary?: boolean;
  secondary?: boolean;
  col?: boolean;
  cardSection?: boolean;
  featureSection?: boolean;
  overviewSection?: boolean;
  id?: string;
  height?: number;
}>) {
  const ref = useScrollSmooth(id);
  const { isPlay } = useSelector(({ player }: RootState) => player);

  return (
    <SectionStyled
      ref={ref}
      id={id}
      $odd={odd}
      $primary={primary}
      $secondary={secondary}
      $full={full}
      $col={col}
      $isOn={isPlay}
      $cardSection={cardSection}
      $featureSection={featureSection}
      $overviewSection={overviewSection}
    >
      {children}
    </SectionStyled>
  );
}
