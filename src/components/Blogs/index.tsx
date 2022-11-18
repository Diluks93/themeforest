import React from 'react';

import { PathsToPage } from 'constants/';
import { CardProp } from 'HOCs/withControlsHOC/prop';
import { ArrowRight } from 'static';

import {
  BlogStyled,
  Title,
  DescriptionStyled,
  StyledLink,
  PreviewBlog,
  Date,
} from './styled';

export function Blog({ src, name }: CardProp) {
  return (
    <BlogStyled>
      <PreviewBlog src={src} alt="blog" loading="lazy" />
      <Date>22 June 2022</Date>
      <Title>{name}</Title>
      <DescriptionStyled>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas. Quis autem vel eum iure...
      </DescriptionStyled>
      <StyledLink to={PathsToPage.BLOG}>
        Read more
        <ArrowRight />
      </StyledLink>
    </BlogStyled>
  );
}
