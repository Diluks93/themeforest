import React, { FC, ReactNode } from 'react';

import { ButtonStyled } from './styled';

export const Button: FC<{ children: ReactNode }> = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};
