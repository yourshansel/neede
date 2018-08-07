import React, { Component } from 'react';
import './css/MainComponent.css';
import CardComponent from './CardComponent.js';
import data from './needelibrary.json';
import { uniqBy, sortBy } from 'lodash';
import { store } from './App.js';




class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { data };
}


  render() {

    const mergedData =  uniqBy(store.getState().concat(this.state.data), "name");
    let cardComps = sortBy(mergedData, "name").map(data => {
      return (
        <CardComponent data = {data} />
      )
    });



    return (

      <div>
      <div className="header">Design Resources</div>
      <div className="description">A collection of useful online resources for designers.</div>
      <div className="array-component">{cardComps}</div>

      </div>
    )
  }
}


export default Home;
