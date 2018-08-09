import React, { Component } from 'react';
import './css/MainComponent.css';
import CardComponent from './CardComponent.js';
import { uniqBy, sortBy } from 'lodash';
import { store } from './App.js';
import data from './needelibrary.json';

class Inspiration extends Component {

  constructor() {
    super();
    this.state = { data }

  }




  render() {

    const mergedData =  uniqBy(store.getState().concat(this.state.data), "name");
    let cardComps = sortBy(mergedData, ["feature","name"]).filter(data => data.category === "Inspiration").map(data => {
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
