import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import { theme1, theme2 } from './theme/globalStyle';
import Title from './components/Title';

class App extends Component {
  state = {
    theme: theme1
  };

  handleThemeChange = e => {
    let theme = e.target.value === 'theme1' ? theme1 : theme2;
    this.setState({ theme });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <div>
          <Helmet title="My React Starter" />
          <Title>Welcome to My React Starter</Title>
          <select onChange={e => this.handleThemeChange(e)}>
            <option value="theme1">Theme 1</option>
            <option value="theme2">Theme 2</option>
          </select>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
