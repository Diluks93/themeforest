import {
  Brain,
  Upper,
  Key,
  Analytic,
  BigAnalytic,
  BigBrain,
  BigData,
  BigIntelligence,
  BigKey,
  BigUpper,
} from 'static';
import avatar1 from 'static/images/001_img_person.webp';
import avatar2 from 'static/images/002_img_person.webp';
import avatar3 from 'static/images/003_img_person.webp';
import blog1 from 'static/images/001_img_blog.webp';
import blog2 from 'static/images/002_img_blog.webp';
import blog3 from 'static/images/003_img_blog.webp';

import { PathsToPage } from './router';

export const description =
  'Sed ut perspiciatis unde omnis iste natus error sit voluptat em accusantium doloremque laudantium, totam rem aperiam, eaque ipsaquae ab illo inventore veritatis et quasi architecto beatae vitaedicta sunt explicabo.';

const smallDescription = description.slice(0, 112);

export const statistics = [
  {
    id: 1,
    number: '1830+',
    description: 'Project executed',
  },
  {
    id: 2,
    number: '834+',
    description: 'Satisfied customers',
  },
  {
    id: 3,
    number: '390',
    description: 'Data management',
  },
];

export const benefits = [
  {
    title: 'Machine learning',
    description: smallDescription,
    icon: <Brain />,
  },
  {
    title: 'Access control',
    description: smallDescription,
    icon: <Key />,
  },
  {
    title: 'Embed analytics',
    description: smallDescription,
    icon: <Upper />,
  },
  {
    title: 'Data analytics',
    description: smallDescription,
    icon: <Analytic />,
  },
];

export const testimonials = [
  { src: avatar2, name: 'Alex Bern', post: 'CEO by PixelPerfect' },
  { src: avatar1, name: 'Ruben Chifundo', post: 'CEO by NOX' },
  { src: avatar3, name: 'Tigran Nazaret', post: 'Data analyst' },
];

export const prices = [
  {
    name: 'Free trial',
    price: '$00',
    services: ['For small teams – 5 users', 'Community support'],
  },
  {
    name: 'Lite',
    price: '$99',
    services: [
      'For small teams – 15 users',
      'Individual support',
      'Individual data – 60GB',
    ],
  },
  {
    name: 'Basic',
    price: '$00',
    services: [
      'For big teams – 30 users',
      'Individual support',
      'Individual data – 120GB',
      'Advanced permissions',
    ],
  },
  {
    name: 'For enterprises',
    price: 'Custom',
    services: [
      'Unlimited team members',
      'Individual support',
      'Unlimited Individual data',
      'Advanced permissions',
      'Data history',
      'Audit log',
      'All functions included',
    ],
  },
];

export const blogs = [
  { src: blog1, name: 'ISO 13485 compliance of medical devices' },
  { src: blog2, name: 'Business analysis helps you  in finance' },
  { src: blog3, name: '5 web portal examples your business can learn from' },
];

export const about = [
  PathsToPage.HOME,
  PathsToPage.ABOUT_US,
  PathsToPage.SERVICES,
  PathsToPage.SOLUTIONS,
];

export const information = [
  PathsToPage.CONTACTS,
  PathsToPage.TEAM,
  PathsToPage.BLOG,
  PathsToPage.FAQ,
];

export const services = [
  PathsToPage.ELEMENTS,
  PathsToPage.MAP,
  PathsToPage.PRICING,
  PathsToPage.FAQ,
];

export const quickLinks = [
  PathsToPage.HOME,
  PathsToPage.SOLUTIONS,
  PathsToPage.BLOG,
  PathsToPage.CONTACTS,
  PathsToPage.TEAM,
  PathsToPage.ABOUT_US,
  PathsToPage.SERVICES,
  PathsToPage.FAQ,
];

export const serviceCards = [
  { title: 'Machine learning', icon: <BigBrain /> },
  { title: 'Embed analytics', icon: <BigAnalytic /> },
  { title: 'Access control', icon: <BigKey /> },
  { title: 'Data analytics', icon: <BigData /> },
  { title: 'Big data consulting', icon: <BigUpper /> },
  { title: 'Artificial intelligence', icon: <BigIntelligence /> },
];

export const questions = [
  'What are data analytics?',
  'What is data mining?',
  'What is business intelligence?',
  'What is exploratory data analysis (EDA)?',
  'What is confirmatory data analysis (CDA)?',
  'What are predictive analytics?',
  'What is data visualisation',
];
