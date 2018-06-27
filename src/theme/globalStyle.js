import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

export const themes = {
  dark: {
    primary: '#61dafb',
    secondary: '#414141',
    background: '#2c3039'
  },
  ligth: {
    primary: '#2e538a',
    secondary: '#ffffff',
    background: '#dee4f3'
  }
};

injectGlobal`
  ${styledNormalize}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }

  a, a:visited, a:focus {
    color: inherit;
  }
`;
