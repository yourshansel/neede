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
      <p className="header">Design Resources</p>
      <p className="description">A collection of useful online resources for designers.</p>
      <div className="array-component">{cardComps}</div>

      </div>
    )
  }
}

class Colors extends Component {

  constructor() {
    super();
    this.state = { data }

  }




  render() {


    let cardComps = this.state.data.filter(data => data.category === "Colors").map(data => {
      return (
        <CardComponent data = {data} />
      )
    })

    return (

      <div>
      <p className="header">Colors</p>
      <p className="description">Resources for color inspiration, palette management and more.</p>
      <div className="array-component">{cardComps}</div>

      </div>
    )
  }
}

export default Home;
