export type CardProp = {
  name: string;
  src?: string;
  position?: string;
  price?: string;
  services?: string[];
  style?: Record<string, string>;
};

export type WithControlsProps = {
  title: string;
  isVisibleButtons: boolean;
  countCards: number;
  data: CardProp[];
  duration?: number;
};
