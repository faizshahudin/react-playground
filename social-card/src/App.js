import React, { Component } from 'react';

import CardSection from './components/CardSection';
import Card from './components/Card';
import Response from './components/Response';

class App extends Component {
  render() {
    return (
      <div className="container">
        <CardSection />
      </div>
    );
  }
}

export default App;
