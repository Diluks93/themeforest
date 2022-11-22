import React from 'react';
import { useParams } from 'react-router-dom';

import { Section, BreadCrumb, MainTitle, CardService } from 'components';
import { solutionCards, teamMembers, serviceCards } from 'constants/';
import { Wrapper } from 'pages/Home/styled';

import {
  ContainerStyled,
  Background,
  List,
  ListItem,
  DescriptionStyled,
  SubTitle,
} from './styled';
import { Testimonials } from 'pages/Home/Sections/CardsSection';
import { BlockTitle } from 'styles';
import { Checkmark } from 'static';

export default function ServicesPage() {
  const { solutionId } = useParams();

  return (
    <>
      <Section id={solutionId}>
        <ContainerStyled>
          <BreadCrumb left />
          <MainTitle subtitle="Solutions" title={solutionId as string} />
        </ContainerStyled>
      </Section>
      <Section>
        <ContainerStyled $row>
          {solutionCards.map(card => (
            <CardService {...card} key={card.id} id={card.title} />
          ))}
        </ContainerStyled>
      </Section>
      <Section featureSection odd>
        <Background />
        <ContainerStyled $align>
          <Wrapper $align>
            <BlockTitle>Why choose us?</BlockTitle>
            <List>
              {serviceCards.map(({ id, title }, i) => {
                if (i < 3) {
                  return (
                    <ListItem key={id}>
                      <Checkmark />
                      <SubTitle>{title}</SubTitle>
                      <DescriptionStyled>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores.
                      </DescriptionStyled>
                    </ListItem>
                  );
                }
              })}
            </List>
          </Wrapper>
        </ContainerStyled>
      </Section>
      <Section cardSection>
        <Testimonials
          title="Testimonials"
          isVisibleButtons
          data={teamMembers}
          countCards={3}
          duration={3000}
        />
      </Section>
    </>
  );
}
