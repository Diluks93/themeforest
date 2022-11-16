import React from 'react';

import { DescriptionStyled, StyledLink, Title } from 'components/Blogs/styled';
import { PathsToPage } from 'constants/';
import { ArrowRight } from 'static';

import { CardStyled } from './styled';
import { CardServiceProp } from './prop';

export function CardService({ title, icon, id }: CardServiceProp) {
  return (
    <CardStyled>
      {icon}
      <Title>{title}</Title>
      <DescriptionStyled>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas. Quis autem vel eum iure
      </DescriptionStyled>
      <StyledLink to={`${PathsToPage.SERVICES}/${id}`}>
        Read more
        <ArrowRight />
      </StyledLink>
    </CardStyled>
  );
}
