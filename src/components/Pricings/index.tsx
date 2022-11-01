import React, { PropsWithChildren } from 'react';

import { PathsToPage } from 'constants/';
import { Checkmark } from 'static';

import {
  Header,
  PricingStyled,
  StyledLink,
  Title,
  Row,
  Price,
  Buttons,
  Button,
  Services,
  Service,
  CardsStyled,
} from './styled';

const dataPricings = [
  {
    name: 'Free trial',
    price: '$00',
    services: ['For small teams – 5 users', 'Community support'],
  },
  {
    name: 'Lite',
    price: '$99',
    services: [
      'For small teams – 15 users',
      'Individual support',
      'Individual data – 60GB',
    ],
  },
  {
    name: 'Basic',
    price: '$00',
    services: [
      'For big teams – 30 users',
      'Individual support',
      'Individual data – 120GB',
      'Advanced permissions',
    ],
  },
  {
    name: 'For enterprises',
    price: 'Custom',
    services: [
      'Unlimited team members',
      'Individual support',
      'Unlimited Individual data',
      'Advanced permissions',
      'Data history',
      'Audit log',
      'All functions included',
    ],
  },
];

function Pricing({
  name,
  price,
  services,
}: {
  name: string;
  price: string;
  services: string[];
}) {
  return (
    <PricingStyled>
      <Title>{name}</Title>
      <Row>
        <Price>{price}</Price>
        <Buttons>
          <Button $color>Mo</Button>
          <Button>Yr</Button>
        </Buttons>
      </Row>
      <StyledLink to={PathsToPage.SERVICES}>Choose plan</StyledLink>
      <Services>
        {services.map((service, i) => (
          <Service key={i}>
            <Checkmark />
            {service}
          </Service>
        ))}
      </Services>
    </PricingStyled>
  );
}

export function Pricings({ children }: PropsWithChildren) {
  return (
    <>
      <Header>{children}</Header>
      <CardsStyled>
        {dataPricings.map(pricing => (
          <Pricing {...pricing} key={pricing.name} />
        ))}
      </CardsStyled>
    </>
  );
}
