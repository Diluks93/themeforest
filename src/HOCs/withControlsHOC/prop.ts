export type CardProp = {
  name: string;
  src?: string;
  position?: string;
  price?: string;
  services?: string[];
};

export type WithControlsProps = {
  title: string;
  isVisibleButtons: boolean;
  data: CardProp[];
};
