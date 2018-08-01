import React, { Component } from 'react';
import './css/MainComponent.css';
import CardComponent from './CardComponent.js';
import { store } from './CardComponent.js';



class Favorites extends Component {

  constructor() {
    super();
    

  }


  render() {



    let cardComps = store.getState().map(data => {
      return (
        <CardComponent data = {data} />
      )
    })

    return (

      <div>
      <div className="header">Favorites</div>
      <div className="description">Your favorite design resources all in one place.</div>
      <div className="array-component">{cardComps}</div>

      </div>
    )
  }
}

export default Favorites;
