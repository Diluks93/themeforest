import React, { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { Header, HelperSection, SubscriberSection, Footer } from 'components';
import { PathsToPage } from 'constants/';
import { darkTheme, lightTheme } from 'styles';

const HomePage = lazy(() => import('pages/Home'));
const SolutionsPage = lazy(() => import('pages/Solutions'));
const ElementsPage = lazy(() => import('pages/Elements'));
const BlogPage = lazy(() => import('pages/Blog'));
const ContactsPage = lazy(() => import('pages/Contacts'));
const AboutUsPage = lazy(() => import('pages/AboutUs'));
const TeamPage = lazy(() => import('pages/Team'));
const FAQPage = lazy(() => import('pages/FAQ'));
const ServicesPage = lazy(() => import('pages/Services'));

export function App() {
  const { pathname } = useLocation();
  const invertTheme = (baseTheme: DefaultTheme) =>
    baseTheme.type !== 'light' ? lightTheme : darkTheme;

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
        <Route path={PathsToPage.SERVICES} element={<ServicesPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      {pathname !== '/contacts' ? <HelperSection /> : null}
      <ThemeProvider theme={invertTheme}>
        <SubscriberSection />
        <Footer />
      </ThemeProvider>
    </Suspense>
  );
}
