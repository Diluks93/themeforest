import React from 'react';

import { BreadCrumb, Section } from 'components';
import { DescriptionStyled, Title, Wrapper, ContainerStyled } from './styled';

export function TitleSection() {
  return (
    <Section col secondary id="team">
      <ContainerStyled $padding>
        <BreadCrumb left secondary />
      </ContainerStyled>
      <ContainerStyled $flex $align>
        <Title>Our team</Title>
        <Wrapper>
          <DescriptionStyled>
            Sed ut perspiciatis unde omnis iste natus error volupta doloremque
            laudantium, totam remiga aperiam, eaque ipsa. Phasellus tristique eu
            nisl eu consectetur.
          </DescriptionStyled>
          <DescriptionStyled>
            Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus.
            Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci.
            Sed quis lobortis eros. Fusce id commodo libero.
          </DescriptionStyled>
        </Wrapper>
      </ContainerStyled>
    </Section>
  );
}
