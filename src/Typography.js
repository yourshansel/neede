import React, { Component } from 'react';
import './css/MainComponent.css';
import CardComponent from './CardComponent.js';

import data from './needelibrary.json';

class Typography extends Component {

  constructor() {
    super();
    this.state = { data }

  }




  render() {


    let cardComps = this.state.data.filter(data => data.category === "Typography").map(data => {
      return (
        <CardComponent data = {data} />
      )
    })

    return (

      <div>
      <p className="header">Typography</p>
      <p className="description">Typography Design Description.</p>
      <div className="array-component">{cardComps}</div>

      </div>
    )
  }
}

export default Typography;
