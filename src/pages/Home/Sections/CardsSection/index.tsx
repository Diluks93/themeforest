import { Blog, PriceCard, TestimonialsCard, Section } from 'components';
import { blogs, prices, teamMembers } from 'constants/';

import { withControls } from 'HOCs';

const Testimonials = withControls(TestimonialsCard);
const Prices = withControls(PriceCard);
const Blogs = withControls(Blog);

export function CardsSection() {
  return (
    <Section cardSection col>
      <Testimonials
        title="Testimonials"
        isVisibleButtons
        data={teamMembers.slice(0, 3)}
      />
      <Prices title="Our pricing" isVisibleButtons={false} data={prices} />
      <Blogs title="Our blog" isVisibleButtons data={blogs} />
    </Section>
  );
}
