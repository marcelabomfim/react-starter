import React, { Component } from 'react';
import Helmet from 'react-helmet';

import AppContainer from 'containers/AppContainer';
import Logo from 'components/Logo';
import Title from 'components/Title';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Helmet title="My React Starter" />
        <Logo className="AppLogo" />
        <Title>Welcome to My React Starter</Title>
      </AppContainer>
    );
  }
}

export default App;
