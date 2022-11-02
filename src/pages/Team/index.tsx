import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { BreadCrumb, Section } from 'components';
import { Container, darkTheme, lightTheme } from 'styles';

import member1 from 'static/images/1_member_card.webp';
import member2 from 'static/images/2_member_card.webp';
import member3 from 'static/images/3_member_card.webp';
import member4 from 'static/images/4_member_card.webp';
import member5 from 'static/images/5_member_card.webp';
import member6 from 'static/images/6_member_card.webp';
import member7 from 'static/images/7_member_card.webp';
import member8 from 'static/images/8_member_card.webp';
import member9 from 'static/images/9_member_card.webp';

import { Description, Title, Wrapper, Images, Image } from './styled';

const sourceImages = [
  member1,
  member2,
  member3,
  member4,
  member5,
  member6,
  member7,
  member8,
  member9,
];

export default function TeamPage() {
  const invertTheme = (baseTheme: DefaultTheme) =>
    baseTheme.type !== 'light' ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={invertTheme}>
        <Section height={450} col id="team">
          <Container>
            <BreadCrumb left />
          </Container>
          <Container $flex $align>
            <Title>Our team</Title>
            <Wrapper>
              <Description>
                Sed ut perspiciatis unde omnis iste natus error volupta
                accusantium doloremque laudantium, totam remiga aperiam, eaque
                ipsa. Phasellus tristique eu nisl eu consectetur.
              </Description>
              <Description>
                Morbi urna massa, imperdiet in mauris et, euismod vestibulum
                lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia
                auctor orci. Sed quis lobortis eros. Fusce id commodo libero.
              </Description>
            </Wrapper>
          </Container>
        </Section>
      </ThemeProvider>
      <Section height={1920}>
        <Container>
          <Images>
            {sourceImages.map((image, i) => (
              <Image src={image} alt="member" key={i} />
            ))}
          </Images>
        </Container>
      </Section>
    </>
  );
}
