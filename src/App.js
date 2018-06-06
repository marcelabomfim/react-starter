import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import { theme1, theme2 } from './theme/globalStyle';
import Button from './components/Button';
import Logo from './components/Logo';
import Title from './components/Title';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  background-color: ${props => props.theme.dark};
  color: ${props => props.theme.primary};
  text-align: center;
  position: relative;
  overflow: hidden;
`;

class App extends Component {
  state = {
    theme: theme1
  };

  handleThemeChange = theme => {
    this.setState({ theme });
  };

  render() {
    const { theme } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Helmet title="My React Starter" />
          <Logo className="AppLogo" />
          <Title>Welcome to My React Starter</Title>
          <Button
            primary={theme === theme1}
            onClick={e => this.handleThemeChange(theme1)}
          >
            Theme 1
          </Button>
          <Button
            primary={theme === theme2}
            onClick={e => this.handleThemeChange(theme2)}
          >
            Theme 2
          </Button>
        </AppContainer>
      </ThemeProvider>
    );
  }
}

export default App;
