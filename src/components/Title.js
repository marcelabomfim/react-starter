import styled from 'styled-components';
import { lighten } from 'polished';

export default styled.h1`
  font-size: 1.5em;
  color: ${props => props.theme.primary};
  text-align: center;

  &:hover {
    color: ${props => lighten(0.2, props.theme.primary)};
  }
`;
