import React, { Component } from 'react';
import './css/MainComponent.css';
import CardComponent from './CardComponent.js';
import { store } from './App.js';
import data from './needelibrary.json';
import { uniqBy, sortBy } from 'lodash';
import CarbonAd from './CarbonAd.js';



class Typography extends Component {

  constructor() {
    super();
    this.state = { data }

  }






  render() {

    const mergedData=  uniqBy(store.getState().concat(this.state.data), "name");
    let cardComps = sortBy(mergedData, "name").filter(data => data.category === "Typography").map((data, index) => {
      return (
        <CardComponent data = {data} key = {index}/>
      )
    })

    cardComps.splice(5, 0, <CarbonAd/>);


    return (

      <div>
      <div className="header">Typography</div>
      <div className="description">Font libraries, inspiration and all things text related.</div>
      <div className="array-component">{cardComps}</div>

      </div>
    )
  }
}

export default Typography;
