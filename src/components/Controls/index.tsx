import React from 'react';

import { ArrowLeft, ArrowRight } from 'static';

import { Button, Buttons, Header, BlockTitleStyled } from './styled';
import { ControlsProp } from './prop';

export function Controls({
  title,
  isVisibleButtons,
  handleLeftClick,
  handleRightClick,
}: ControlsProp) {
  return (
    <Header>
      <BlockTitleStyled>{title}</BlockTitleStyled>
      {isVisibleButtons && (
        <Buttons>
          <Button onClick={handleLeftClick}>
            <ArrowLeft />
          </Button>
          <Button onClick={handleRightClick}>
            <ArrowRight />
          </Button>
        </Buttons>
      )}
    </Header>
  );
}
