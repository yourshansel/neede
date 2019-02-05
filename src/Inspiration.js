import React, { Component } from 'react';
import './css/MainComponent.css';
import CardComponent from './CardComponent.js';
import { uniqBy, sortBy } from 'lodash';
import { store } from './App.js';
import data from './needelibrary.json';
import CarbonAd from './CarbonAd.js';


class Inspiration extends Component {

  constructor() {
    super();
    this.state = { data }

  }




  render() {

    const mergedData =  uniqBy(store.getState().concat(this.state.data), "name");
    let cardComps = sortBy(mergedData, "name").filter(data => data.category === "Inspiration").map((data, index) => {
      return (
        <CardComponent data = {data} key= {index} />
      )
    })

    cardComps.splice(5, 0, <CarbonAd/>);


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
