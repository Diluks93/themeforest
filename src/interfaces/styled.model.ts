export enum ThemeEnum {
  light = 'light',
  dark = 'dark',
}

export interface InterfaceTheme {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    indigo: string;
    slate: string;
    steel: string;
    black: string;
    grey: string;
    background: string;
    error: string;
    white: string;
    hover: string;
    hoverButton: string;
    footer: string;
  };

  sizes: {
    header: {
      height: number;
    };
    container: {
      width: number[];
    };
    button: {
      width: number;
      height: number;
    };
    footer: {
      height: number;
    };
    navigation: {
      width: number;
    };
  };

  gaps: number[];

  media: {
    extraLarge: string;
    large: string;
    medium: string;
    small: string;
    mobile: string;
  };
}
