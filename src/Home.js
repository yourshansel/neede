import React, { Component } from 'react';
import './css/MainComponent.css';
import CardComponent from './CardComponent.js';

import data from './needelibrary.json';

class Home extends Component {

  constructor() {
    super();
    this.state = { data }
  }



  render() {

    let cardComps = this.state.data.map(data => {
      return (
        <CardComponent data = {data} />
      )
    })

    return (

      <div>
      <div className="header">Design Resources</div>
      <div className="description">A collection of useful online resources for designers.</div>
      <div className="array-component">{cardComps}</div>

      </div>
    )
  }
}


export default Home;
