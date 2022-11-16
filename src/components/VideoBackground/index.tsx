import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'store';
import videoBg from 'static/videos/background.mp4';

import { VideoStyled } from './styled';

export function VideoBackground() {
  const { isPlay } = useSelector(({ player }: RootState) => player);

  return (
    <>
      {isPlay && (
        <VideoStyled src={videoBg} loop muted autoPlay preload="none" />
      )}
    </>
  );
}
