import React, {
  ComponentType,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Controls } from 'components';

import { CardProp, WithControlsProps } from './prop';
import { CardsStyled, ContainerStyled } from './styled';
import { ThemeContext } from 'styled-components';

export function withControls<T extends WithControlsProps>(
  Component: ComponentType<CardProp>
) {
  return (hocProps: T) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cards = useRef<CardProp[]>(hocProps.data).current;
    const node = useRef<HTMLDivElement>(null);
    const shift = useRef(0);
    const { gaps } = useContext(ThemeContext);
    const gap = gaps[8];

    const carouselInfiniteScroll = () => {
      if (currentIndex === cards.length - hocProps.countCards) {
        return setCurrentIndex(0);
      }
      return setCurrentIndex(currentIndex + 1);
    };

    const handleLeftClick = () => {
      if (currentIndex === 0) {
        return setCurrentIndex(cards.length - hocProps.countCards);
      }
      return setCurrentIndex(currentIndex - 1);
    };

    const handleRightClick = () => {
      carouselInfiniteScroll();
    };

    useEffect(() => {
      shift.current =
        (gap * 100) / (node.current?.children[0].clientWidth || 1) + 100;
    }, [gap]);

    useEffect(() => {
      const intervalId = setInterval(carouselInfiniteScroll, hocProps.duration);

      return () => clearInterval(intervalId);
    });

    return (
      <ContainerStyled>
        <Controls
          {...hocProps}
          handleLeftClick={handleLeftClick}
          handleRightClick={handleRightClick}
        />
        <CardsStyled ref={node} $transform={currentIndex * shift.current}>
          {cards.map((card, index) => (
            <Component {...card} key={index} />
          ))}
        </CardsStyled>
      </ContainerStyled>
    );
  };
}
