import React, { lazy, Suspense, useMemo } from 'react';
import { useTheme } from 'styled-components';
import { Route, Routes, useLocation } from 'react-router-dom';

import {
  Header,
  HelperSection,
  SubscriberSection,
  FooterLight,
  FooterDark,
} from 'components';
import { PathsToPage } from 'constants/';

const HomePage = lazy(() => import('pages/Home'));
const SolutionsPage = lazy(() => import('pages/Solutions'));
const ElementsPage = lazy(() => import('pages/Elements'));
const BlogPage = lazy(() => import('pages/Blog'));
const ContactsPage = lazy(() => import('pages/Contacts'));
const AboutUsPage = lazy(() => import('pages/AboutUs'));
const TeamPage = lazy(() => import('pages/Team'));
const FAQPage = lazy(() => import('pages/FAQ'));
const ServicesPage = lazy(() => import('pages/Services'));
const ServicePage = lazy(() => import('pages/Service'));

export function App() {
  const { pathname } = useLocation();
  const { type } = useTheme();

  const shouldRenderHelperSection = useMemo(() => {
    switch (pathname) {
      case PathsToPage.CONTACTS:
      case PathsToPage.TEAM:
      case PathsToPage.ABOUT_US:
        return null;
      default:
        return <HelperSection />;
    }
  }, [pathname]);

  return (
    <Suspense fallback="Loading...">
      <Header />
      <Routes>
        <Route path={PathsToPage.HOME} element={<HomePage />} />
        <Route path={PathsToPage.SOLUTIONS} element={<SolutionsPage />} />
        <Route path={PathsToPage.ELEMENTS} element={<ElementsPage />} />
        <Route path={PathsToPage.BLOG} element={<BlogPage />} />
        <Route path={PathsToPage.CONTACTS} element={<ContactsPage />} />
        <Route path={PathsToPage.ABOUT_US} element={<AboutUsPage />} />
        <Route path={PathsToPage.TEAM} element={<TeamPage />} />
        <Route path={PathsToPage.FAQ} element={<FAQPage />} />
        <Route path={PathsToPage.SERVICES}>
          <Route index element={<ServicesPage />} />
          <Route path={PathsToPage.SERVICE} element={<ServicePage />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      {shouldRenderHelperSection}
      <SubscriberSection />
      {type === 'light' ? <FooterDark /> : <FooterLight />}
    </Suspense>
  );
}
