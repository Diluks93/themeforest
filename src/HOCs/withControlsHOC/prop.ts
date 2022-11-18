export type CardProp = {
  name: string;
  src?: string;
  post?: string;
  price?: string;
  services?: string[];
};

export type WithControlsProps = {
  title: string;
  isVisibleButtons: boolean;
  data: CardProp[];
};
