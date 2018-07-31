import React, { Component } from 'react';
import './css/MainComponent.css';
import CardComponent from './CardComponent.js';

import data from './needelibrary.json';

class Icons extends Component {

  constructor() {
    super();
    this.state = { data }

  }




  render() {


    let cardComps = this.state.data.filter(data => data.category === "Icons").map(data => {
      return (
        <CardComponent data = {data} />
      )
    })

    return (

      <div>
      <div className="header">Icons</div>
      <div className="description">Icons Design Description.</div>
      <div className="array-component">{cardComps}</div>

      </div>
    )
  }
}

export default Icons;
