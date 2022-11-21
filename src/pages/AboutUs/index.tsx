import React from 'react';

import { SubHeaderSection } from './sections/SubHeaderSection';
import { AboutUsSection } from './sections/AboutUsSection';
import { OverviewSection } from './sections/OverviewSection';
import { FeedbackSection } from './sections/FeedbackSection';
import { ContactUsSection } from './sections/ContactUsSection';

export default function AboutUsPage() {
  return (
    <>
      <SubHeaderSection />
      <AboutUsSection />
      <OverviewSection />
      <FeedbackSection />
      <ContactUsSection />
    </>
  );
}
