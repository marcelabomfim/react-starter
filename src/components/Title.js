import styled from 'styled-components';
import { lighten } from 'polished';

export default styled.h1`
  font-size: 1.5em;
  color: #1565c0;
  text-align: center;

  &:hover {
    color: ${lighten(0.2, '#1565c0')};
  }
`;
