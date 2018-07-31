import React, { Component } from 'react';
import './css/MainComponent.css';
import CardComponent from './CardComponent.js';

import data from './needelibrary.json';

class Software extends Component {

  constructor() {
    super();
    this.state = { data }

  }




  render() {


    let cardComps = this.state.data.filter(data => data.category === "Software").map(data => {
      return (
        <CardComponent data = {data} />
      )
    })

    return (

      <div>
      <div className="header">Software</div>
      <div className="description">Software Design Description.</div>
      <div className="array-component">{cardComps}</div>

      </div>
    )
  }
}

export default Software;
