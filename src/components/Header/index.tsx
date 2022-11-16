import React, { memo } from 'react';

import { Logo, Navigation, BurgerMenu, useToggleLightMode } from 'components';
import { Play } from 'static';
import { Container } from 'styles';

import { HeaderStyled, ButtonHeader } from './styled';

function HeaderWithoutMemo() {
  const { isLightMode } = useToggleLightMode();

  return (
    <HeaderStyled>
      <Container $flex>
        <Logo isOn={isLightMode} />
        <Navigation />
        <ButtonHeader>
          <Play />
          Watch the demo
        </ButtonHeader>
        <BurgerMenu />
      </Container>
    </HeaderStyled>
  );
}

export const Header = memo(HeaderWithoutMemo);
