import React from 'react';
import { ThemeProvider } from 'styled-components';

import Router from '@/router';

import { GlobalStyle } from '@/styles/GlobalStyle';
import { Theme } from '@/styles/Theme';
import '@/styles/fonts.css';

const App = () => {
  const vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

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
