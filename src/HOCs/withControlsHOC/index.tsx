import React, { ComponentType } from 'react';

import { useCarousel } from 'hooks/useCarousel';
import { Controls } from 'components';

import { CardProp, WithControlsProps } from './prop';
import { CardsStyled, ContainerStyled } from './styled';

export function withControls<T extends WithControlsProps>(
  Component: ComponentType<CardProp>
) {
  return (hocProps: T) => {
    const { handleLeftClick, handleRightClick, cards } = useCarousel(
      hocProps.data
    );

    return (
      <ContainerStyled>
        <Controls
          {...hocProps}
          handleLeftClick={handleLeftClick}
          handleRightClick={handleRightClick}
        />
        <CardsStyled>
          {cards.map((card, index) => (
            <Component {...card} key={index} />
          ))}
        </CardsStyled>
      </ContainerStyled>
    );
  };
}
