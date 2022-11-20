import React from 'react';

import { CardProp } from 'HOCs/withControlsHOC/prop';
import { description } from 'constants/';
import {
  Avatar,
  CardStyled,
  Column,
  Name,
  Post,
  Wrapper,
  DescriptionStyled,
} from './styled';

export function TestimonialsCard({ src, name, position }: CardProp) {
  return (
    <CardStyled>
      <Wrapper>
        <Avatar src={src} alt="avatar" />
        <Column>
          <Name>{name}</Name>
          <Post>{position}</Post>
        </Column>
      </Wrapper>
      <DescriptionStyled children={description} />
    </CardStyled>
  );
}
