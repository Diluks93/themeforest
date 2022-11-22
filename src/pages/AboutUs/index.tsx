import React from 'react';

import { SubHeaderSection, ContactUsSection } from 'components';
import { AboutUsSection } from './sections/AboutUsSection';
import { OverviewSection } from './sections/OverviewSection';
import { FeedbackSection } from './sections/FeedbackSection';

export default function AboutUsPage() {
  return (
    <>
      <SubHeaderSection title="About Us" />
      <AboutUsSection />
      <OverviewSection />
      <FeedbackSection />
      <ContactUsSection />
    </>
  );
}
