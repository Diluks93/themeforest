import React, { lazy, Suspense, useMemo } from 'react';
import { useTheme } from 'styled-components';
import { Route, Routes, useLocation } from 'react-router-dom';

import {
  Header,
  HelperSection,
  SubscriberSection,
  FooterLight,
  FooterDark,
  VideoBackground,
} from 'components';
import { PathsToPage } from 'constants/';

const HomePage = lazy(() => import('pages/Home'));
const ContactsPage = lazy(() => import('pages/Contacts'));
const AboutUsPage = lazy(() => import('pages/AboutUs'));
const TeamPage = lazy(() => import('pages/Team'));
const FAQPage = lazy(() => import('pages/FAQ'));
const ServicesPage = lazy(() => import('pages/Services'));
const ServicePage = lazy(() => import('pages/Service'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));

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
      <VideoBackground />
      <Routes>
        <Route path={PathsToPage.HOME} element={<HomePage />} />
        <Route path={PathsToPage.SOLUTIONS} element={<ErrorPage />} />
        <Route path={PathsToPage.ELEMENTS} element={<ErrorPage />} />
        <Route path={PathsToPage.BLOG} element={<ErrorPage />} />
        <Route path={PathsToPage.CONTACTS} element={<ContactsPage />} />
        <Route path={PathsToPage.ABOUT_US} element={<AboutUsPage />} />
        <Route path={PathsToPage.TEAM} element={<TeamPage />} />
        <Route path={PathsToPage.FAQ} element={<FAQPage />} />
        <Route path={PathsToPage.SERVICES}>
          <Route index element={<ServicesPage />} />
          <Route path={PathsToPage.SERVICE} element={<ServicePage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {shouldRenderHelperSection}
      <SubscriberSection />
      {type === 'light' ? <FooterDark /> : <FooterLight />}
    </Suspense>
  );
}
