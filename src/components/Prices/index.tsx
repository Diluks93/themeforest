import React from 'react';

import { PathsToPage } from 'constants/';
import { Checkmark } from 'static';
import { CardProp } from 'pages/Home/Sections/CardsSection/prop';

import {
  PricingStyled,
  StyledLink,
  Title,
  Row,
  Price,
  Buttons,
  Button,
  Services,
  Service,
  Column,
} from './styled';

export function PriceCard({ name, price, services }: CardProp) {
  return (
    <PricingStyled>
      <Column>
        <Title>{name}</Title>
        <Row>
          <Price>{price}</Price>
          <Buttons>
            <Button $color>Mo</Button>
            <Button>Yr</Button>
          </Buttons>
        </Row>
      </Column>
      <StyledLink to={PathsToPage.SERVICES}>Choose plan</StyledLink>
      <Services>
        {services?.map((service, i) => (
          <Service key={i}>
            <Checkmark />
            {service}
          </Service>
        ))}
      </Services>
    </PricingStyled>
  );
}
