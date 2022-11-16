import React from 'react';

import { OverviewSection } from 'components';
import { GreetingSection } from './Sections/GreetingSection';
import { FeaturesSection } from './Sections/FeaturesSection';
import { BenefitsSection } from './Sections/BenefitsSection';
import { CardsSection } from './Sections/CardsSection';

export default function HomePage() {
  return (
    <>
      <GreetingSection />
      <FeaturesSection />
      <OverviewSection />
      <BenefitsSection />
      <CardsSection />
    </>
  );
}
