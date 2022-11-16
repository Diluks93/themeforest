import { Dispatch, SetStateAction } from 'react';

export type HeaderProp = {
  on: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
};
