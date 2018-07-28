import React, { Component } from 'react';
import './css/MainComponent.css';


class AboutComponent extends Component {

  constructor() {
    super();
  }

  render(){
    return(
      <div>
      <p className="header">About</p>
      <p className="description">Description about Neede.</p>
      </div>
    )}
  }

  export default AboutComponent;
