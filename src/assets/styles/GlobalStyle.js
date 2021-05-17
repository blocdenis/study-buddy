import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;1,700&display=swap');
  html {
    box-sizing: border-box;
  }
  *,*::after, *::before {
    box-sizing: inherit;
  }
  body {
    font-family: 'Monserrat', sans-serif;
  }
  a, button {
    font-family: 'Monserrat', sans-serif;
  }
`;
