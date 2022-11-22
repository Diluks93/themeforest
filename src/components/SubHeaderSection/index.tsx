import React from 'react';
import { useLocation } from 'react-router-dom';

import { BreadCrumb, Section } from 'components';
import { Title } from 'components/MainTitle/styled';

import { ContainerStyled } from './styled';

export function SubHeaderSection({ title }: { title: string }) {
  const { pathname } = useLocation();

  return (
    <Section odd id={pathname}>
      <ContainerStyled>
        <Title>{title}</Title>
        <BreadCrumb />
      </ContainerStyled>
    </Section>
  );
}
