import React from 'react';

import {
  BreadCrumb,
  Cards,
  ContactForm,
  Customers,
  Section,
  Statistic,
} from 'components';
import { Container } from 'styles';
import team1 from 'static/images/img_10.webp';
import team2 from 'static/images/img_11.webp';

import {
  Title,
  Block,
  Wrapper,
  SubTitle,
  Description,
  Image,
  Divider,
  Email,
  Labeling,
  Phone,
  Address,
} from './styled';

export default function AboutUsPage() {
  return (
    <>
      <Section odd id="about">
        <Container>
          <Title>About Us</Title>
          <BreadCrumb />
        </Container>
      </Section>
      <Section height={1200}>
        <Container>
          <Block>
            <Wrapper>
              <SubTitle>Who we are</SubTitle>
              <Description>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Donec tincidunt tempor quam, non
                mollis quam finibus nec. Quisque finibus consequat felis vel
                pretium. Aliquam gravida nisi vel convallis ultricies. Integer
                ante sapien, consequat et dolor vel, cursus lacinia lectus.
              </Description>
            </Wrapper>
            <Image src={team1} alt="team" />
          </Block>
          <Block $reverse>
            <Wrapper>
              <SubTitle>Our mission</SubTitle>
              <Description>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Donec tincidunt tempor quam, non
                mollis quam finibus nec. Quisque finibus consequat felis vel
                pretium.
              </Description>
            </Wrapper>
            <Image src={team2} alt="team" />
          </Block>
        </Container>
      </Section>
      <Section height={514} odd col>
        <Container>
          <SubTitle>Ensome in numbers</SubTitle>
        </Container>
        <Wrapper $row>
          <Statistic number="1830+" description="Project executed" />
          <Divider />
          <Statistic number="220" description="Data analytics" />
          <Divider />
          <Statistic number="390" description="Data management" />
          <Divider />
          <Statistic number="834+" description="Satisfied customers" />
        </Wrapper>
      </Section>
      <Section height={1200}>
        <Container>
          <Wrapper>
            <SubTitle>Our customers</SubTitle>
            <Description>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudan, totam rem aperiam.
            </Description>
          </Wrapper>
          <Customers />
          <Cards>
            <SubTitle>What our customers say</SubTitle>
          </Cards>
        </Container>
      </Section>
      <Section height={833} odd>
        <Container>
          <Block>
            <Wrapper>
              <SubTitle>
                Left questions? Contacts us now for a free consultation and free
                trial!
              </SubTitle>
              <Description>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
              </Description>
              <Email href="mailto:ensome@info.co.us">
                <Labeling>Email</Labeling>
                ensome@info.co.us
              </Email>
              <Phone href="tel:+1 601-201-5580">
                <Labeling>Phone</Labeling>
                +1 601-201-5580
              </Phone>
              <Address>
                <Labeling>Address</Labeling>
                1642 Washington Avenue, Jackson, MS, 39201
              </Address>
            </Wrapper>
            <ContactForm />
          </Block>
        </Container>
      </Section>
    </>
  );
}
