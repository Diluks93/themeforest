import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '../src/components';
import { baseTheme, FontStyles, GlobalStyle } from '../src/styles';

export const Decorator = storyFn => (
  <ThemeProvider theme={baseTheme}>
    <BrowserRouter>
      <GlobalStyle />
      <FontStyles />
      {storyFn()}
    </BrowserRouter>
  </ThemeProvider>
);
