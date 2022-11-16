import React, { memo, PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';

import { useScrollSmooth } from 'hooks/useScrollSmooth';
import { RootState } from 'store';

import { SectionStyled } from './styled';

function SectionWithoutMemo({
  children,
  id,
  odd,
  background,
  height,
  full,
  col,
  primary,
  cardSection,
  featureSection,
  overviewSection,
}: PropsWithChildren<{
  odd?: boolean;
  full?: boolean;
  primary?: boolean;
  col?: boolean;
  cardSection?: boolean;
  featureSection?: boolean;
  overviewSection?: boolean;
  id?: string;
  background?: string;
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
      $background={background}
      $height={height}
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

export const Section = memo(SectionWithoutMemo);
