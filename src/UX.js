import React, { Component } from 'react';
import './css/MainComponent.css';
import CardComponent from './CardComponent.js';

import data from './needelibrary.json';

class UX extends Component {

  constructor() {
    super();
    this.state = { data }

  }




  render() {


    let cardComps = this.state.data.filter(data => data.category === "UX").map(data => {
      return (
        <CardComponent data = {data} />
      )
    })

    return (

      <div>
      <div className="header">UX Design</div>
      <div className="description">Articles on UX best practices and tools for user testing.</div>
      <div className="array-component">{cardComps}</div>

      </div>
    )
  }
}

export default UX;
