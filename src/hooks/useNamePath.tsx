import { PathsToPage } from 'constants/';
import { useMemo } from 'react';

export const useNamePath = (path: PathsToPage) =>
  useMemo(() => path.replace('themeforest', 'home').slice(1), [path]);
