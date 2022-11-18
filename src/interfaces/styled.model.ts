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
    backgroundFooter: string;
    error: string;
    white: string;
    hover: string;
    hoverButton: string;
    footer: string;
    footerColor: string;
  };

  sizes: {
    header: {
      height: number;
    };
    container: {
      width: number[];
      height: number[];
      paddings: number[];
    };
    button: {
      width: number[];
      padding: number[];
      height: number[];
    };
    footer: {
      height: number;
    };
    navigation: {
      width: number;
      itemWidth: number;
    };
    description: {
      width: number[];
    };
    title: {
      height: number[];
      width: number[];
    };
    benefit: {
      height: number[];
      width: number[];
      padding: number[];
    };
    card: {
      height: number[];
      width: number[];
      padding: number[];
    };
    image: {
      height: number[];
      width: number[];
    };
  };

  borderRadius: number;

  fonts: {
    families: string[];
    weights: number[];
    sizes: number[];
    heights: number[];
    spacings: number[];
  };

  gaps: number[];

  shadows: {
    button: string;
    card: string;
    form: string;
  };

  media: {
    extraLarge: string;
    large: string;
    medium: string;
    small: string;
    mobile: string;
  };
}
