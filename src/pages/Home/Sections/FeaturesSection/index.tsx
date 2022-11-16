import React from 'react';
import { Link } from 'react-router-dom';

import { description, PathsToPage } from 'constants/';
import { Section } from 'components';
import { Mark } from 'styles';
import { Wrapper } from 'pages/Home/styled';

import {
  ContainerStyled,
  SubTitle,
  BlockTitleStyled,
  Button,
  Background,
  DescriptionStyled,
} from './styled';

export function FeaturesSection() {
  return (
    <>
      <Section featureSection col>
        <ContainerStyled>
          <SubTitle>
            The <Mark>newest</Mark> business analytics platform
          </SubTitle>
          <Wrapper>
            <DescriptionStyled children={description} />
            <Button>
              <Link to={PathsToPage.SOLUTIONS}>Discover more</Link>
            </Button>
          </Wrapper>
        </ContainerStyled>
      </Section>
      <Section featureSection odd>
        <Background />
        <ContainerStyled>
          <Wrapper $align>
            <BlockTitleStyled>
              Radically new solutions for data
            </BlockTitleStyled>
            <DescriptionStyled children={description} />
            <Button>
              <Link to={PathsToPage.SOLUTIONS}>Learn more</Link>
            </Button>
          </Wrapper>
        </ContainerStyled>
      </Section>
    </>
  );
}
