import React, { ComponentType } from 'react';

import { useCarousel } from 'hooks/useCarousel';
import {
  Blog,
  Controls,
  PriceCard,
  TestimonialsCard,
  Section,
} from 'components';
import { blogs, prices, testimonials } from 'constants/';

import { CardProp, WithControlsProps } from './prop';
import { CardsStyled, ContainerStyled } from './styled';

function withControls<T extends WithControlsProps>(
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

const Testimonials = withControls(TestimonialsCard);
const Prices = withControls(PriceCard);
const Blogs = withControls(Blog);

export function CardsSection() {
  return (
    <Section cardSection col>
      <Testimonials title="Testimonials" isVisibleButtons data={testimonials} />
      <Prices title="Our pricing" isVisibleButtons={false} data={prices} />
      <Blogs title="Our blog" isVisibleButtons data={blogs} />
    </Section>
  );
}
