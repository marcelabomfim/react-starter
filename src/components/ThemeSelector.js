import React from 'react';
import styled from 'styled-components';

import Button from 'components/Button';

const Selector = styled.div`
  position: fixed;
  width: 150px;
  top: 50vh;
  transform: translateY(-50%);
  left: -150px;
  background-color: ${props => props.theme.secondary};
  border: 2px solid ${props => props.theme.primary};
  border-left: 0;
  display: flex;
  flex-direction: column;
  padding: 5px;
  transition: left ease 0.3s;

  &:hover {
    left: 0;
  }

  button {
    margin: 5px;
  }
`;

const SelectorTitle = styled.span`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  transform: rotate(90deg);
  display: block;
  padding: 10px;
  border-radius: 0 0 6px 6px;
  width: 95px
  height: 40px;
  position: absolute;
  right: -68px;
  bottom: 26px;
  transform: rotate(-90deg);
`;

export default ({ selected, handleChange }) => (
  <Selector>
    <SelectorTitle>theme</SelectorTitle>
    <Button primary={selected === 'dark'} onClick={e => handleChange('dark')}>
      Dark
    </Button>
    <Button primary={selected === 'ligth'} onClick={e => handleChange('ligth')}>
      Light
    </Button>
  </Selector>
);
