import React, { memo, ReactNode } from 'react';

import { Facebook, Twitter, LinkedIn, YouTube, Dribble, Behance } from 'static';

import { SocialStyled, SocialLinks } from './styled';

function SocialWithoutMemo({
  children,
}: {
  children: ReactNode;
  $visible?: boolean;
}) {
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

export const Social = memo(SocialWithoutMemo);
