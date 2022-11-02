import React, { memo } from 'react';

import {
  Logo,
  Button,
  Navigation,
  BurgerMenu,
  useToggleLightMode,
} from 'components';
import { Play } from 'static';
import { Container } from 'styles';

import { HeaderStyled } from './styled';

function HeaderWithoutMemo() {
  const { isLightMode } = useToggleLightMode();

  return (
    <HeaderStyled>
      <Container $flex>
        <Logo isOn={isLightMode} />
        <Navigation />
        <Button>
          <Play />
          Watch the demo
        </Button>
        <BurgerMenu />
      </Container>
    </HeaderStyled>
  );
}

export const Header = memo(HeaderWithoutMemo);
