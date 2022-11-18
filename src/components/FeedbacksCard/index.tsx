import React from 'react';

import {
  Avatar,
  CardStyled,
  DescriptionStyled,
  Column,
  Name,
  Post,
} from 'components/TestimonialsCard/styled';
import { CardProp } from 'HOCs/withControlsHOC/prop';
import { feedback } from 'constants/';

export function FeedbacksCard({ src, name, post }: CardProp) {
  return (
    <CardStyled $isBig>
      <Avatar src={src} alt="avatar" />
      <DescriptionStyled children={feedback} />
      <Column>
        <Name>{name}</Name>
        <Post>{post}</Post>
      </Column>
    </CardStyled>
  );
}
