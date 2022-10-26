import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { App } from 'components';
import { baseTheme, GlobalStyle } from 'styles';
import { reportWebVitals } from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ThemeProvider theme={baseTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);

reportWebVitals(console.log);
