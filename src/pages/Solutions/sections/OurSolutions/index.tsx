import React from 'react';

import { solutions, PathsToPage } from 'constants/';
import { Container, BlockTitle } from 'styles';
import { Checkmark } from 'static';

import {
  Wrapper,
  CardStyled,
  Title,
  StyledLink,
  Services,
  Service,
  ContainerStyled,
} from './styled';

export function OurSolutions() {
  return (
    <ContainerStyled>
      <BlockTitle>Our solutions</BlockTitle>
      <Wrapper>
        {solutions.map(({ title, services, id }) => {
          return (
            <CardStyled key={id}>
              <Title>{title}</Title>
              <Services>
                {services.map((service, i) => (
                  <Service key={i}>
                    <Checkmark />
                    {service}
                  </Service>
                ))}
              </Services>
              <StyledLink to={`${PathsToPage.SOLUTIONS}/${title}`}>
                Read more
              </StyledLink>
            </CardStyled>
          );
        })}
      </Wrapper>
    </ContainerStyled>
  );
}
