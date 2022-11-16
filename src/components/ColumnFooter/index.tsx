import React, { ForwardedRef, forwardRef, ReactNode } from 'react';

import { PathsToPage } from 'constants/';
import { useNamePath } from 'hooks/useNamePath';

import { ListItemStyled, Wrapper } from './styled';

function ColumnFooterWithoutRef(
  {
    listPaths,
    children,
    startOrder,
  }: {
    listPaths: PathsToPage[];
    children: ReactNode;
    startOrder: number;
  },
  forwardedRef?: ForwardedRef<HTMLUListElement>
) {
  const getNamePath = useNamePath;

  return (
    <Wrapper $column ref={forwardedRef}>
      {children}
      {listPaths.map((path, index) => {
        return (
          <ListItemStyled key={path} to={path} order={index + startOrder}>
            {getNamePath(path)}
          </ListItemStyled>
        );
      })}
    </Wrapper>
  );
}

export const ColumnFooter = forwardRef(ColumnFooterWithoutRef);
