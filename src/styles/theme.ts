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
    footerColor: '#FFFFFF',
    greyly: '#D7D7D7',
    background: '#F1F6FA',
    backgroundFooter: '#002B4E',
    error: '#C14040',
    white: '#FFFFFF',
    hover: '#292D33',
    hoverButton: '#FFFFFF',
  },

  gaps: [
    3, 7, 9, 10, 12, 15, 20, 25, 30, 40, 46, 50, 130, 145, 190, 376, 515, 60,
  ],

  shadows: {
    button: '0px 12px 30px rgba(24, 92, 255, 0.18)',
    card: '0px 4px 12px rgba(12, 68, 204, 0.1)',
  },

  sizes: {
    container: {
      width: [328, 540, 720, 960, 1110],
      height: [740],
      paddings: [73, 90, 120, 100, 137],
    },
    button: {
      width: [125, 137, 140, 168, 185, 190, 272],
      padding: [10, 15],
      height: [44, 46, 54],
    },
    navigation: {
      width: 510,
      itemWidth: 60,
    },
    header: {
      height: 126,
    },
    footer: {
      height: 530,
    },
    description: {
      width: [350],
    },
    title: {
      height: [120],
      width: [540],
    },
    benefit: {
      height: [248],
      width: [255],
      padding: [25],
    },
    card: {
      height: [371, 482],
      width: [350],
      padding: [35],
    },
  },

  fonts: {
    sizes: [12, 14, 16, 20, 22, 26, 38, 46, 50, 57, 80],
    families: ['Manrope', 'Open Sans'],
    weights: [400, 500, 600, 700, 800],
    heights: [24, 28, 30, 33, 40, 56, 60, 66, 88, 112],
    spacings: [-0.01, -0.015],
  },

  borderRadius: 6,

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
    footer: baseTheme.colors.grey,
    footerColor: baseTheme.colors.grey,
    backgroundFooter: baseTheme.colors.background,
  },
};
