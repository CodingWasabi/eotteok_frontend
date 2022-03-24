import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { ThemeProvider } from 'styled-components';

import rootReducer from '@/modules';

import { GlobalStyle } from '@/styles/GlobalStyle';
import { Theme } from '@/styles/Theme';
import '@/styles/fonts.css';

const store = createStore(rootReducer, composeWithDevTools());

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Story />
      </ThemeProvider>
    </Provider>
  ),
];
