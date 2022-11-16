import React, { FC } from 'react';

import { ButtonProps } from './props';
import { ButtonStyled } from './styled';

export const Button: FC<ButtonProps> = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};
