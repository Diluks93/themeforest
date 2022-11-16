import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { App, LightModeProvider, ThemeProvider } from 'components';
import { GlobalStyle, FontStyles } from 'styles';
import { store } from 'store';
import { reportWebVitals } from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <LightModeProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Provider store={store}>
            <GlobalStyle />
            <FontStyles />
            <App />
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    </LightModeProvider>
  </StrictMode>
);

reportWebVitals(
  process.env.NODE_ENV !== 'production' ? console.log : undefined
);
