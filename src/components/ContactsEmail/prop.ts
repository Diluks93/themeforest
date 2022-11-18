import { PropsWithChildren } from 'react';

export type StyledContactProp = {
  $grey?: boolean;
  $black?: boolean;
  $flex?: boolean;
};

export type ContactProp = PropsWithChildren<{
  grey?: boolean;
  black?: boolean;
  flex?: boolean;
}>;
