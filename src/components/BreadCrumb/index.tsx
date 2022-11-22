import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { useNamePath } from 'hooks/useNamePath';

import { Wrapper, FirstCrumb, LastCrumb, Divider } from './styled';
import { BredCrumbProp } from './prop';

export function BreadCrumb({ left, secondary }: BredCrumbProp) {
  const { pathname } = useLocation();
  const { serviceId, solutionId } = useParams();
  const id = serviceId || solutionId;
  const path = useNamePath(id ? id : pathname);

  return (
    <Wrapper $left={left} $secondary={secondary}>
      <FirstCrumb>Home</FirstCrumb>
      <Divider>|</Divider>
      <LastCrumb $secondary={secondary}>{path}</LastCrumb>
    </Wrapper>
  );
}
