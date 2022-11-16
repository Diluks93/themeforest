import React from 'react';
import { useSelector } from 'react-redux';

import { PathsToPage, description } from 'constants/';
import { ButtonCircle, Section } from 'components';
import { RootState } from 'store';
import { Mark } from 'styles';

import mainTeamBackground from 'static/images/main-team.webp';
import { ContainerStyled, DescriptionStyled, Title, Image } from './styled';

export function GreetingSection() {
  const { isPlay } = useSelector(({ player }: RootState) => player);

  return (
    <>
      <Section col>
        <ContainerStyled>
          <Title>
            Find true power in your data with
            <Mark>Ensome {isPlay ? 'true' : 'false'}</Mark>
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
