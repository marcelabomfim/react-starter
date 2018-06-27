import React, { Component } from 'react';
import Helmet from 'react-helmet';

import AppContainer from 'containers/AppContainer';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Helmet title="My React Starter" />
        <Header />
        <Main />
        <Footer />
      </AppContainer>
    );
  }
}

export default App;
