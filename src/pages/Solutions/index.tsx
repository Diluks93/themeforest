import React from 'react';

import { SubHeaderSection, ContactUsSection } from 'components';
import { ReviewsSection } from './sections/ReviewsSection';
import { OverviewSection } from './sections/OverviewSection';
import { CompanySolutionSection } from './sections/CompanySolutionSection';

export default function SolutionsPage() {
  return (
    <>
      <SubHeaderSection title="Solutions" />
      <CompanySolutionSection />
      <OverviewSection />
      <ReviewsSection />
      <ContactUsSection />
    </>
  );
}
