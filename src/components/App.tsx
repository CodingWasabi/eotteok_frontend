import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@/styles/GlobalStyle';
import { Theme } from '@/styles/Theme';
import '@/styles/fonts.css';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <div>Junseo's project setting</div>
      </ThemeProvider>
    </>
  );
};

export default App;
