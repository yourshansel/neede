import React, { Component } from 'react';
import './css/MainComponent.css';
import BookComponent from './BookComponent.js';
import { uniqBy, sortBy } from 'lodash';
import { store } from './App.js';
import data from './needebooks.json';


class Books extends Component {

  constructor() {
    super();
    this.state = { data }

  }




  render() {

    const mergedData =  uniqBy(store.getState().concat(this.state.data), "name");
    let cardComps = sortBy(mergedData, "name").filter(data => data.category === "Books").map((data, index) => {
      return (
        <BookComponent data = {data} key= {index} />
      )
    })


    return (

      <div>
      <div className="header">Books</div>
      <div className="description">Books every designer should read. </div>
      <div className="array-component">{cardComps}</div>

      </div>
    )
  }
}

export default Books;
