import React from 'react';
import { useParams } from 'react-router-dom';

import { BreadCrumb, Section } from 'components';
import { Container } from 'styles';

import { Title } from './styled';

export default function Service() {
  const { serviceId } = useParams();

  return (
    <>
      <Section odd id={serviceId}>
        <Container>
          <Title>{serviceId}</Title>
          <BreadCrumb />
        </Container>
      </Section>
    </>
  );
}
