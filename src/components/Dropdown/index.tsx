import React, { memo, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { PathsToPage } from 'constants/';
import { useNamePath } from 'hooks/useNamePath';

import { DropdownStyled, ListItemStyled, UnorderedList } from './styled';

interface DropDownProps {
  isOpen: boolean;
  trigger: ReactNode;
  menu: PathsToPage[];
  element: HTMLDivElement | HTMLButtonElement;
  toggle: () => void;
}

function DropdownWithoutMemo({
  isOpen,
  trigger,
  menu,
  element,
  toggle,
}: DropDownProps) {
  const getNamePath = useNamePath;

  return createPortal(
    <DropdownStyled>
      {trigger}
      {isOpen ? (
        <UnorderedList>
          {menu.map(menuItem => (
            <ListItemStyled key={menuItem} to={menuItem} onClick={toggle}>
              {getNamePath(menuItem)}
            </ListItemStyled>
          ))}
        </UnorderedList>
      ) : null}
    </DropdownStyled>,
    element
  );
}

export const Dropdown = memo(DropdownWithoutMemo);
