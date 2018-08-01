import React, { Component } from 'react';
import './css/CardComponent.css';
import IconComponent from './IconComponent.js';
import { createStore } from 'redux';

export const initialState = [];

function rootReducer(favArray = initialState, action) {
  switch(action.type) {
    case 'ADD_FAVORITE':
    return favArray.concat([action.data]);
    case 'SUB_FAVORITE':
    return favArray.filter(favArray => favArray.name !== action.data.name);
    default:
      return favArray;
  }
}

export const store = createStore(rootReducer, initialState);

class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.toggleFavorites = this.toggleFavorites.bind(this);


  }

  toggleFavorites(e) {
    if
    (store.getState().includes(this.props.data))
  {
    console.log(this.props.data.name + ' removed from favorites');
    store.dispatch({type: 'SUB_FAVORITE', data: this.props.data});
    console.log(store.getState());

  }
    else{

    console.log(this.props.data.name + ' added to favorites');
    store.dispatch({type: 'ADD_FAVORITE', data: this.props.data});
    console.log(store.getState());

    }

  }


  render() {
    let {name, description, url , screenshot} = this.props.data;
    return (
      <div className="cardComponent">
        <div className="CTA-container">
          <div className="CTA-wrapper">
            <div onClick={() => this.toggleFavorites(this.props.data)}className="CTA-icon"><IconComponent icon="favorite"/></div>
            <a href={url} className="CTA-icon" target="_blank"><IconComponent icon="link"/></a>
        </div>
      </div>
      <img src={screenshot} alt="" className="cardComponent_img"/>
      <a href={url} className="cardComponent_name" target="_blank">{name}</a>
      <p className="cardComponent_description">{description}</p>

      </div>
      );
    };
  };
export default CardComponent;
