import React, { Component } from 'react';
import './css/MainComponent.css';
import CardComponent from './CardComponent.js';

import data from './needelibrary.json';

class Inspiration extends Component {

  constructor() {
    super();
    this.state = { data }

  }




  render() {


    let cardComps = this.state.data.filter(data => data.category === "Inspiration").map(data => {
      return (
        <CardComponent data = {data} />
      )
    })

    return (

      <div>
      <div className="header">Inspiration</div>
      <div className="description">Mobile & Web design trends, product inspirations and more. </div>
      <div className="array-component">{cardComps}</div>

      </div>
    )
  }
}

export default Inspiration;
