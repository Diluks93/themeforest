import React from 'react';

import {
  useToggleLightMode,
  Logo,
  Button,
  Navigation,
  BurgerMenu,
} from 'components';
import { Play } from 'static';
import { Container } from 'styles';

import { HeaderStyled } from './styled';

export function Header() {
  const { isLightMode, toggleLightMode } = useToggleLightMode();

  return (
    <HeaderStyled>
      <Container $flex>
        <Logo isOn={isLightMode} onClick={toggleLightMode} />
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
