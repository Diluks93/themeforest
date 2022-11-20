import React from 'react';

import { Main } from 'styles';

import { TitleSection } from './sections/TitleSection';
import { MembersSection } from './sections/MembersSection';

export default function TeamPage() {
  return (
    <Main>
      <TitleSection />
      <MembersSection />
    </Main>
  );
}
