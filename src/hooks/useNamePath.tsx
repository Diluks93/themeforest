import { PathsToPage } from 'constants/';
import { useMemo } from 'react';

export const useNamePath = (path: PathsToPage) =>
  useMemo(
    () =>
      path
        .replace('themeforest', 'home')
        .replace('about', 'about us')
        .replace('team', 'Our team')
        .replace('map', 'site map')
        .replace('faq', 'FAQ')
        .slice(1),
    [path]
  );
