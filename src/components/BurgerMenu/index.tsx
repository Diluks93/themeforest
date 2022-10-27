import React, { RefObject } from 'react';

import { BurgerMenuIcon } from 'static';
import { useDropdown } from 'hooks/useDropDown';

import { BurgerMenuStyled } from './styled';

export function BurgerMenu() {
  const { containerRef, toggleOpen, renderDropdown } = useDropdown();

  return (
    <BurgerMenuStyled
      ref={containerRef as RefObject<HTMLButtonElement>}
      id="menu"
    >
      {renderDropdown(<BurgerMenuIcon onClick={toggleOpen} />)}
    </BurgerMenuStyled>
  );
}
