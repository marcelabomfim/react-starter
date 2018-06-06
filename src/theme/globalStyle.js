import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

export const theme1 = {
  primary: '#61dafb',
  secondary: '#577aa2',
  dark: '#2c3039'
};

export const theme2 = {
  primary: '#a96069',
  secondary: '#c6956e',
  dark: '#494d5f'
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
`;
