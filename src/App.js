import React, { Component } from 'react';
import ArrayComponent from './ArrayComponent.js';
import './css/App.css'


class App extends Component {
  constructor() {
    super();
  }


    render() {
      return(
      <div className="main-background">
      <ArrayComponent/>
      </div>
      )
    }
  }

export default App;
