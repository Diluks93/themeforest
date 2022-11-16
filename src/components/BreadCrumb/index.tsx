import React from 'react';
import { useLocation } from 'react-router-dom';

import { useNamePath } from 'hooks/useNamePath';

import { Wrapper, FirstCrumb, LastCrumb, Divider } from './styled';
import { BredCrumbProp } from './prop';

export function BreadCrumb({ left }: BredCrumbProp) {
  const { pathname } = useLocation();
  const path = useNamePath(pathname);

  return (
    <Wrapper $left={left}>
      <FirstCrumb>Home</FirstCrumb>
      <Divider>|</Divider>
      <LastCrumb>{path}</LastCrumb>
    </Wrapper>
  );
}
