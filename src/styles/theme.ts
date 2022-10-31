import { ThemeEnum } from 'interfaces/styled.model';
import { DefaultTheme } from 'styled-components';

export const baseTheme = {
  colors: {
    primary: '#185CFF',
    secondary: '#002B4E',
    tertiary: '#F0F9FF',
    indigo: '#194060',
    slate: '#607D94',
    steel: '#C9DCEC',
    black: '#292D33',
    grey: '#9497A1',
    footer: '#9497A1',
    greyly: '#D7D7D7',
    background: '#F1F6FA',
    error: '#C14040',
    white: '#FFFFFF',
    hover: '#292D33',
    hoverButton: '#FFFFFF',
  },

  gaps: [10, 15, 40, 145, 190, 376, 515],

  sizes: {
    container: {
      width: [328, 540, 720, 960, 1110],
    },
    button: {
      width: 168,
      height: 44,
    },
    navigation: {
      width: 511,
    },
    header: {
      height: 126,
    },
    footer: {
      height: 530,
    },
  },

  media: {
    extraLarge: '(max-width: 1110px)',
    large: '(max-width: 960px)',
    medium: '(max-width: 720px)',
    small: '(max-width: 540px)',
    mobile: '(max-width: 360px)',
  },
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.light,
};

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,

  colors: {
    ...baseTheme.colors,
    background: baseTheme.colors.secondary,
    primary: baseTheme.colors.white,
    black: baseTheme.colors.white,
    grey: baseTheme.colors.white,
    hover: baseTheme.colors.greyly,
    white: baseTheme.colors.secondary,
    hoverButton: baseTheme.colors.primary,
    steel: baseTheme.colors.grey,
    footer: baseTheme.colors.grey,
    tertiary: baseTheme.colors.steel,
  },
};
