import React, { Component } from 'react';
import './css/MainComponent.css';
import CardComponent from './CardComponent.js';
import { store } from './App.js';
import data from './needelibrary.json';
import { uniqBy, sortBy } from 'lodash';

class UI extends Component {

  constructor() {
    super();
    this.state = { data }

  }




  render() {

    const mergedData=  uniqBy(store.getState().concat(this.state.data), "name");
    let cardComps = sortBy(mergedData, ["feature","name"]).filter(data => data.category === "UI").map(data => {
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
