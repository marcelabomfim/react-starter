import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom';

import AppContainer from 'containers/AppContainer';

import Header from 'components/Header';
import Footer from 'components/Footer';

import Home from 'pages/Home';
import About from 'pages/About';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Helmet title="My React Starter" />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </AppContainer>
    );
  }
}

export default App;
