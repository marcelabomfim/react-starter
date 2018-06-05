import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

export const theme1 = {
  primary: '#1565c0'
};

export const theme2 = {
  primary: '#f5c901'
};

injectGlobal`
  ${styledNormalize}

  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
`;
