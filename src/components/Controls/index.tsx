import React from 'react';

import { ArrowLeft, ArrowRight } from 'static';

import { Button, Buttons, Header, BlockTitleStyled } from './styled';
import { ControlsProp } from './prop';

export function Controls({
  title,
  isVisibleButtons,
  handleLeftClick,
  handleRightClick,
  disabledControls,
}: ControlsProp) {
  return (
    <Header>
      <BlockTitleStyled>{title}</BlockTitleStyled>
      {isVisibleButtons && (
        <Buttons>
          <Button
            onClick={handleLeftClick}
            $disabled={disabledControls}
            disabled={disabledControls}
          >
            <ArrowLeft />
          </Button>
          <Button
            onClick={handleRightClick}
            $disabled={disabledControls}
            disabled={disabledControls}
          >
            <ArrowRight />
          </Button>
        </Buttons>
      )}
    </Header>
  );
}
