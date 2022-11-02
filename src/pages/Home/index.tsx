import React from 'react';

import {
  Benefits,
  Blogs,
  Button,
  ButtonCircle,
  Cards,
  Pricings,
  Section,
  OverviewSection,
} from 'components';
import { PathsToPage } from 'constants/';
import { Container } from 'styles';

import ensomeTeam from 'static/images/team.webp';
import mainTeamBackground from 'static/images/main-team.webp';

import {
  Title,
  Mark,
  Description,
  SubTitle,
  Wrapper,
  StyledLink,
  BlockTitle,
  Background,
} from './styled';

export default function HomePage() {
  return (
    <>
      <Section id="themeforest">
        <Container $flex $unique>
          <Title>
            Find true power in your data with <Mark>Ensome</Mark>
          </Title>
          <Description $unique>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi.
            <ButtonCircle path={PathsToPage.SERVICES}>Learn more</ButtonCircle>
          </Description>
        </Container>
      </Section>
      <Section odd background={mainTeamBackground} full />
      <Section height={464}>
        <Container $flex>
          <SubTitle>
            The <Mark>newest</Mark> business analytics platform
          </SubTitle>
          <Wrapper>
            <Description>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Description>
            <Button>
              <StyledLink to={PathsToPage.SOLUTIONS}>Discover more</StyledLink>
            </Button>
          </Wrapper>
        </Container>
      </Section>
      <Section odd>
        <Background $background={ensomeTeam}></Background>
        <Container $flex>
          <Wrapper $align>
            <BlockTitle>Radically new solutions for data</BlockTitle>
            <Description>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Description>
            <Button>
              <StyledLink to={PathsToPage.SOLUTIONS}>Learn more</StyledLink>
            </Button>
          </Wrapper>
        </Container>
      </Section>
      <OverviewSection />
      <Section odd height={822}>
        <Container $flex>
          <Wrapper>
            <SubTitle $full $left>
              The benefits of Ensome
            </SubTitle>
            <Description>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Description>
          </Wrapper>
          <Benefits />
        </Container>
      </Section>
      <Section height={614}>
        <Container>
          <Cards>
            <BlockTitle>Testimonials</BlockTitle>
          </Cards>
        </Container>
      </Section>
      <Section height={750}>
        <Container>
          <Pricings>
            <BlockTitle>Our pricing</BlockTitle>
          </Pricings>
        </Container>
      </Section>
      <Section height={805}>
        <Container>
          <Blogs>
            <BlockTitle>Our Blog</BlockTitle>
          </Blogs>
        </Container>
      </Section>
    </>
  );
}
