import React from 'react';

import { Section, FeedbacksCard } from 'components';
import { teamMembers } from 'constants/';
import { withControls } from 'HOCs';

import { ContainerStyled } from './styled';

const Reviews = withControls(FeedbacksCard);

export function ReviewsSection() {
  return (
    <Section>
      <ContainerStyled>
        <Reviews
          title="Trusted by the best in the business"
          isVisibleButtons
          data={teamMembers}
          countCards={2}
          duration={3000}
        />
      </ContainerStyled>
    </Section>
  );
}
