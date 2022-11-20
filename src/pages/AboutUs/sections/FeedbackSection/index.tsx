import React from 'react';

import { Customers, Section, FeedbacksCard } from 'components';
import { Title } from 'components/MainTitle/styled';
import { teamMembers } from 'constants/';
import { Description } from 'styles';
import { withControls } from 'HOCs';

import { ContainerStyled } from '../AboutUsSection/styled';
import { Block, Wrapper } from './styled';

const Feedbacks = withControls(FeedbacksCard);

export function FeedbackSection() {
  return (
    <Section>
      <ContainerStyled>
        <Wrapper>
          <Block>
            <Title>Our customers</Title>
            <Description>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudan, totam rem aperiam.
            </Description>
          </Block>
          <Customers isBrighter />
        </Wrapper>
        <Feedbacks
          title="What our customers say"
          isVisibleButtons
          data={teamMembers.slice(0, 2)}
        />
      </ContainerStyled>
    </Section>
  );
}
