import { Blog, PriceCard, TestimonialsCard, Section } from 'components';
import { blogs, prices, testimonials } from 'constants/';

import { withControls } from 'HOCs';

const Testimonials = withControls(TestimonialsCard);
const Prices = withControls(PriceCard);
const Blogs = withControls(Blog);

export function CardsSection() {
  return (
    <Section cardSection col>
      <Testimonials title="Testimonials" isVisibleButtons data={testimonials} />
      <Prices title="Our pricing" isVisibleButtons={false} data={prices} />
      <Blogs title="Our blog" isVisibleButtons data={blogs} />
    </Section>
  );
}
