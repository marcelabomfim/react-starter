import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Title from './components/Title';

class App extends Component {
  render() {
    return (
      <div>
        <Helmet title="My React Starter" />
        <Title>Welcome to My React Starter</Title>
      </div>
    );
  }
}

export default App;
