import React, { Component } from 'react';
import './css/MainComponent.css';
import CardComponent from './CardComponent.js';

import data from './needelibrary.json';

class UI extends Component {

  constructor() {
    super();
    this.state = { data }

  }




  render() {


    let cardComps = this.state.data.filter(data => data.category === "UI").map(data => {
      return (
        <CardComponent data = {data} />
      )
    })

    return (

      <div>
      <div className="header">UI Design</div>
      <div className="description">Design templates, sketch resources and component libraries.</div>
      <div className="array-component">{cardComps}</div>

      </div>
    )
  }
}

export default UI;
