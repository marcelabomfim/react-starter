import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { lighten } from 'polished';

const Header = styled.header`
  background: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 1.5em;
  margin: 0;

  &:hover {
    color: ${props => lighten(0.2, props.theme.primary)};
  }
`;

const Menu = styled.nav`
  text-align: right;
  margin: 0;

  ul {
    margin: 0;

    li {
      display: inline-block;
      list-style: none;
      padding: 5px 20px;

      &:hover {
        color: ${props => lighten(0.2, props.theme.primary)};
      }

      .active {
        font-weight: bold;
      }
    }
  }
`;

export default () => (
  <Header>
    <Title>React Starter</Title>
    <Menu>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </Menu>
  </Header>
);
