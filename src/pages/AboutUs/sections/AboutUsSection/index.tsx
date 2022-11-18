import React from 'react';

import { dataAboutUs } from 'constants/';
import { Description } from 'styles';
import { Section } from 'components';

import { Block, ContainerStyled, Image, Wrapper } from './styled';
import { Title } from 'components/MainTitle/styled';

export function AboutUsSection() {
  const renderBlocks = dataAboutUs.map(
    ({ id, title, description, src, reverse }) => (
      <Block key={id} $reverse={reverse}>
        <Wrapper>
          <Title children={title} />
          <Description children={description} />
        </Wrapper>
        <Image src={src} alt="team" />
      </Block>
    )
  );

  return (
    <Section>
      <ContainerStyled children={renderBlocks} />
    </Section>
  );
}
