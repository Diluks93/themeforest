import React, { FC } from 'react';

import { PathsToPage } from 'constants/';
import { SmallChevron } from 'static';
import { useNamePath } from 'hooks/useNamePath';
import { useDropdown } from 'hooks/useDropDown';

import { ListItemStyled, NavigationStyled, QuickLink } from './styled';

const ListItem: FC<{
  link: PathsToPage;
  index: number;
  onClick: () => void;
}> = ({ link, index, onClick }) => {
  const getNamePath = useNamePath(link);

  if (index > 4) {
    return null;
  }

  return (
    <ListItemStyled to={link} order={index} onClick={onClick}>
      {getNamePath}
    </ListItemStyled>
  );
};

export function Navigation() {
  const {
    containerRef,
    links,
    isOpen,
    toggleOpen,
    setOpenFalse,
    renderDropdown,
  } = useDropdown();

  return (
    <NavigationStyled ref={containerRef}>
      {links.map((link, index) => (
        <ListItem key={link} link={link} index={index} onClick={setOpenFalse} />
      ))}
      {renderDropdown(
        <QuickLink isOpen={isOpen} onClick={toggleOpen}>
          Pages
          <SmallChevron />
        </QuickLink>
      )}
    </NavigationStyled>
  );
}
