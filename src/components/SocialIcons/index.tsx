import React, { PropsWithChildren } from 'react';

import { Facebook, Twitter, LinkedIn, YouTube, Dribble, Behance } from 'static';

import { SocialStyled, SocialLinks } from './styled';

export function Social({
  children,
}: PropsWithChildren<{ $visible?: boolean }>) {
  return (
    <SocialStyled>
      {children}
      <SocialLinks>
        <Facebook />
        <Twitter />
        <LinkedIn />
        <YouTube />
        <Dribble />
        <Behance />
      </SocialLinks>
    </SocialStyled>
  );
}
