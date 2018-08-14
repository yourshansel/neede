import React, { Component } from 'react';
import './css/MainComponent.css';
import CardComponent from './CardComponent.js';
import { store } from './App.js';
import data from './needelibrary.json';
import { uniqBy, sortBy } from 'lodash';
import CarbonAd from './CarbonAd.js';




class Photos extends Component {

  constructor() {
    super();
    this.state = { data }

  }




  render() {

    const mergedData=  uniqBy(store.getState().concat(this.state.data), "name");
    let cardComps = sortBy(mergedData, "name").filter(data => data.category === "Photo").map(data => {
      return (
        <CardComponent data = {data} />
      )
    })

    return (

      <div>
      <div className="header">Photos</div>
      <div className="description">Resources for stock photos, image organization and more.</div>
      <div className="array-component">{cardComps}<CarbonAd/></div>

      </div>
    )
  }
}

export default Photos;
