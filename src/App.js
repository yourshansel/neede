import React, { Component } from 'react';
import MainComponent from './MainComponent.js';
import './css/App.css'
import Navigation from './Navigation.js';


class App extends Component {
  constructor() {
    super();
  }


    render() {
      return(
      <div className="main-background">
      <Navigation/>
      <MainComponent/>
      </div>
      )
    }
  }

export default App;
