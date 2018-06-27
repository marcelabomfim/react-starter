import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { themes } from 'theme/globalStyle';
import ThemeSelector from 'components/ThemeSelector';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.primary};
  text-align: center;
  position: relative;
  overflow: hidden;
`;

class App extends Component {
  state = {
    selected: 'dark'
  };

  handleThemeChange = selected => {
    this.setState({ selected });
  };

  render() {
    const { selected } = this.state;

    return (
      <ThemeProvider theme={themes[selected]}>
        <Container>
          {this.props.children}
          <ThemeSelector
            selected={selected}
            handleChange={this.handleThemeChange}
          />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
