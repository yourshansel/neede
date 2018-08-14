import React, { Component } from 'react';
import './css/MainComponent.css';
import CardComponent from './CardComponent.js';
import { uniqBy, sortBy } from 'lodash';
import { store } from './App.js';
import CarbonAd from './CarbonAd.js';


import data from './needelibrary.json';

class Community extends Component {

  constructor() {
    super();
    this.state = { data }

  }




  render() {

    const mergedData =  uniqBy(store.getState().concat(this.state.data), "name");
    let cardComps = sortBy(mergedData, "name").filter(data => data.category === "Community").map(data => {
      return (
        <CardComponent data = {data} />
      )
    })

    return (

      <div>
      <div className="header">Community</div>
      <div className="description">Showcase your work, ask questions and keep up with the latest news.</div>
      <div className="array-component">{cardComps}<CarbonAd/></div>

      </div>
    )
  }
}

export default Community;
