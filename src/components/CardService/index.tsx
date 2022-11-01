import React from 'react';

import { PathsToPage } from 'constants/';
import { ArrowRight } from 'static';

import { CardStyled, Title, Description, StyledLink } from './styled';

export function CardService({
  title,
  icon,
}: {
  title: string;
  icon: JSX.Element;
}) {
  // TODO SERVICE - ID
  return (
    <CardStyled>
      {icon}
      <Title>{title}</Title>
      <Description>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas. Quis autem vel eum iure
      </Description>
      <StyledLink to={PathsToPage.SERVICES}>
        Read more
        <ArrowRight />
      </StyledLink>
    </CardStyled>
  );
}
