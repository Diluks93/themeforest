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
import { Main } from 'styles';

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

  const shouldRenderSubSections = useMemo(() => {
    switch (pathname) {
      case PathsToPage.CONTACTS:
        return null;
      case PathsToPage.TEAM:
      case PathsToPage.ABOUT_US:
        return <SubscriberSection />;
      default:
        return (
          <>
            <HelperSection />
            <SubscriberSection />
          </>
        );
    }
  }, [pathname]);

  return (
    <Suspense fallback="Loading...">
      <Header />
      <VideoBackground />
      <Main>
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
      </Main>
      {shouldRenderSubSections}
      {type === 'light' ? <FooterDark /> : <FooterLight />}
    </Suspense>
  );
}
