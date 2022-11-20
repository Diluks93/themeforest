import React, { useState, useRef, useCallback } from 'react';

import { Section } from 'components';
import { useFetchMember } from 'hooks/useFetchMember';

import {
  ContainerStyled,
  Images,
  Image,
  Figure,
  Name,
  Employee,
  Position,
} from './styled';

export function MembersSection() {
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, members, hasMore } = useFetchMember(pageNumber);
  const observer = useRef<IntersectionObserver>();

  const lastMemberRef = useCallback(
    (node: HTMLElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(entities => {
        if (entities[0].isIntersecting && hasMore) {
          setPageNumber(p => p + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const checkIsLastMember = (index: number) =>
    members.length === index + 1 ? lastMemberRef : null;

  return (
    <Section>
      <ContainerStyled>
        <Images>
          {members.map(({ id, src, name, position }, index) => {
            return (
              <Figure ref={checkIsLastMember(index)} key={id}>
                <Image src={src} alt={name} />
                <Employee>
                  <Name>{name}</Name>
                  <Position>{position}</Position>
                </Employee>
              </Figure>
            );
          })}
        </Images>
        {loading && <Name $black>Loading...</Name>}
        {error && <Name $black>Oooops something went wrong!</Name>}
      </ContainerStyled>
    </Section>
  );
}
