import { Blog, PriceCard, TestimonialsCard, Section } from 'components';
import { blogs, prices, teamMembers } from 'constants/';

import { withControls } from 'HOCs';

export const Testimonials = withControls(TestimonialsCard);
const Prices = withControls(PriceCard);
const Blogs = withControls(Blog);

export function CardsSection() {
  return (
    <Section cardSection col>
      <Testimonials
        title="Testimonials"
        isVisibleButtons
        data={teamMembers}
        countCards={3}
        duration={3000}
      />
      <Prices
        title="Our pricing"
        isVisibleButtons={false}
        data={prices}
        countCards={4}
      />
      <Blogs title="Our blog" isVisibleButtons data={blogs} countCards={3} />
    </Section>
  );
}
