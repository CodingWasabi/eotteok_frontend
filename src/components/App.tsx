import React from 'react';
import { ThemeProvider } from 'styled-components';

import Router from '@/router';

import { GlobalStyle } from '@/styles/GlobalStyle';
import { Theme } from '@/styles/Theme';
import '@/styles/fonts.css';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;
