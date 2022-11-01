import React, { memo, PropsWithChildren } from 'react';

import { useCarousel } from 'hooks/useCarousel';
import { ArrowLeft, ArrowRight } from 'static';
import avatar1 from 'static/images/001_img_person.webp';
import avatar2 from 'static/images/002_img_person.webp';
import avatar3 from 'static/images/003_img_person.webp';

import {
  CardStyled,
  Avatar,
  Wrapper,
  Name,
  Post,
  Column,
  Description,
  CardsStyled,
  Header,
  Buttons,
  Button,
} from './styled';

const dataCard = [
  { src: avatar2, name: 'Ruben Chifundo', post: 'CEO by NOX' },
  { src: avatar1, name: 'Alex Bern', post: 'CEO by PixelPerfect' },
  { src: avatar3, name: 'Tigran Nazaret', post: 'Data analyst' },
];

function CardWithoutMemo({
  src,
  name,
  post,
}: {
  src: string;
  name: string;
  post: string;
}) {
  return (
    <CardStyled>
      <Wrapper>
        <Avatar src={src} alt="avatar" />
        <Column>
          <Name>{name}</Name>
          <Post>{post}</Post>
        </Column>
      </Wrapper>
      <Description>
        “Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor
        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
        utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil
        molesti consequatur, vel illum.”
      </Description>
    </CardStyled>
  );
}

const Card = memo(CardWithoutMemo);

export function Cards({ children }: PropsWithChildren) {
  const { handleRightClick, handleLeftClick, cards } = useCarousel(dataCard);

  return (
    <>
      <Header>
        {children}
        <Buttons>
          <Button onClick={handleLeftClick}>
            <ArrowLeft />
          </Button>
          <Button onClick={handleRightClick}>
            <ArrowRight />
          </Button>
        </Buttons>
      </Header>
      <CardsStyled>
        {cards.map(props => (
          <Card {...props} key={props.name} />
        ))}
      </CardsStyled>
    </>
  );
}
