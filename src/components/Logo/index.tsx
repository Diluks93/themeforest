import React, { FC } from 'react';

import { useToggleLightMode } from 'components';
import { LogoBlue, LogoWhite } from 'static';

export const Logo: FC<{ isOn?: boolean }> = ({ isOn }) => {
  const { toggleLightMode } = useToggleLightMode();

  return isOn ? (
    <LogoBlue onClick={toggleLightMode} />
  ) : (
    <LogoWhite onClick={toggleLightMode} />
  );
};
