import React, { Component } from 'react';
import CardComponent from './CardComponent.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <p className="headertext">
          Testing Code.
        </p>
        <CardComponent/>
      </div>
    );
  }
}

export default App;
