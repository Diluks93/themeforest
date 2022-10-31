import { PropsWithChildren, useCallback, useEffect, useState } from 'react';

import { PathsToPage } from 'constants/';
import { ArrowLeft, ArrowRight } from 'static';
import blog1 from 'static/images/001_img_blog.webp';
import blog2 from 'static/images/002_img_blog.webp';
import blog3 from 'static/images/003_img_blog.webp';

import {
  CardsStyled,
  Header,
  Buttons,
  Button,
  CardStyled,
  Title,
  Description,
  StyledLink,
  PreviewBlog,
  Date,
} from './styled';

const dataCard = [
  { src: blog1, name: 'ISO 13485 compliance of medical devices' },
  { src: blog2, name: 'Business analysis helps you  in finance' },
  { src: blog3, name: '5 web portal examples your business can learn from' },
];

function Card({ src, name }: { src: string; name: string }) {
  return (
    <CardStyled>
      <PreviewBlog src={src} alt="blog" />
      <Date>22 June 2022</Date>
      <Title>{name}</Title>
      <Description>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas. Quis autem vel eum iure...
      </Description>
      <StyledLink to={PathsToPage.BLOG}>
        Read more
        <ArrowRight />
      </StyledLink>
    </CardStyled>
  );
}

export function Blogs({ children }: PropsWithChildren) {
  const [cards, setCards] = useState(dataCard);

  const handleRightClick = useCallback(() => {
    const firstItem = cards.shift();

    if (firstItem) {
      cards.push(firstItem);
    }

    setCards([...cards]);
  }, [cards]);

  const handleLeftClick = useCallback(() => {
    const lastItem = cards.pop();

    if (lastItem) {
      cards.unshift(lastItem);
    }

    setCards([...cards]);
  }, [cards]);

  useEffect(() => {
    const intervalId = setInterval(() => handleRightClick(), 5000);

    return () => clearInterval(intervalId);
  }, [handleRightClick]);

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
        {cards.map((props, i) => (
          <Card {...props} key={i} />
        ))}
      </CardsStyled>
    </>
  );
}
