import React from 'react';

import { PathsToPage, description } from 'constants/';
import { ButtonCircle } from 'components';
import { Mark } from 'styles';

import { useScrollSmooth } from 'hooks/useScrollSmooth';
import mainTeamBackground from 'static/images/main-team.webp';
import {
  ContainerStyled,
  DescriptionStyled,
  Title,
  Section,
  Image,
} from './styled';

export function GreetingSection() {
  const id = 'themeforest';
  const ref = useScrollSmooth(id);

  return (
    <>
      <Section ref={ref} id={id}>
        <ContainerStyled>
          <Title>
            Find true power in your data with <Mark>Ensome</Mark>
          </Title>
          <DescriptionStyled>
            {description}
            <ButtonCircle path={PathsToPage.SERVICES}>Learn more</ButtonCircle>
          </DescriptionStyled>
        </ContainerStyled>
        <Image src={mainTeamBackground} alt="team meeting" loading="lazy" />
      </Section>
    </>
  );
}
