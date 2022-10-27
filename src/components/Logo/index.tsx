import React, { FC } from 'react';

import { LogoBlue, LogoWhite } from 'static';

export const Logo: FC<{ isOn: boolean; onClick: () => void }> = ({
  isOn,
  onClick,
}) => {
  return isOn ? (
    <LogoBlue onClick={onClick} />
  ) : (
    <LogoWhite onClick={onClick} />
  );
};
