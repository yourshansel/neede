import React, { Component } from 'react';
import './css/MainComponent.css';
import CardComponent from './CardComponent.js';
import { store } from './App.js';
import data from './needelibrary.json';
import { uniqBy, sortBy } from 'lodash';

class Icons extends Component {

  constructor() {
    super();
    this.state = { data }

  }




  render() {

      const mergedData=  uniqBy(store.getState().concat(this.state.data), "name");
    let cardComps = sortBy(mergedData, "name").filter(data => data.category === "Icons").map(data => {
      return (
        <CardComponent data = {data} />
      )
    })

    return (

      <div>
      <div className="header">Icons</div>
      <div className="description">Resources for icons, pattern organization and management.</div>
      <div className="array-component">{cardComps}</div>

      </div>
    )
  }
}

export default Icons;
