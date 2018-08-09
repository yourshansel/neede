import React, { Component } from 'react';
import './css/MainComponent.css';
import CardComponent from './CardComponent.js';
import { store } from './App.js';
import data from './needelibrary.json';
import { uniqBy, sortBy } from 'lodash';

class UX extends Component {

  constructor() {
    super();
    this.state = { data }

  }




  render() {

    const mergedData=  uniqBy(store.getState().concat(this.state.data), "name");
    let cardComps = sortBy(mergedData, ["feature","name"]).filter(data => data.category === "UX").map(data => {
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
