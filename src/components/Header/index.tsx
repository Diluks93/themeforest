import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Logo, Navigation, BurgerMenu, useToggleLightMode } from 'components';
import { togglePlayer } from 'store/reducers/player';
import { RootState } from 'store';
import { Play } from 'static';
import { Container } from 'styles';

import { HeaderStyled, ButtonHeader } from './styled';

export function Header() {
  const { isLightMode } = useToggleLightMode();
  const dispatch = useDispatch();
  const { isPlay } = useSelector(({ player }: RootState) => player);

  const handleClick = () => {
    dispatch(togglePlayer());
  };

  return (
    <HeaderStyled>
      <Container $flex>
        <Logo isOn={isLightMode} />
        <Navigation />
        <ButtonHeader onClick={handleClick}>
          {isPlay ? '' : <Play />}
          {isPlay ? 'Stop' : 'Watch'} the demo
        </ButtonHeader>
        <BurgerMenu />
      </Container>
    </HeaderStyled>
  );
}
