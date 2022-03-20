import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    body * {
        font-family: NanumAmSeuTeReuDam;
        letter-spacing: -0.03px;
        line-height: 1.5;
    }
    * {
    box-sizing: border-box;
  }
  input {
      font-family: NanumAmSeuTeReuDam;
      all: unset;
  }
  a {
      text-decoration: none;
  }
  button {
      border: none;
      background-color: transparent;
  }
`;
