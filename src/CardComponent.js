import React, { Component } from 'react';
import './css/CardComponent.css';
import IconComponent from './IconComponent.js';
import { store } from './App.js'

export function rootReducer(state = [], action) {


  switch(action.type) {
    case 'ADD_FAVORITE':
    return [...state,action.data];
    case 'SUB_FAVORITE':
    return [...state.filter(state => state.name !== action.data.name)];
    default:
      return state;
  }
}




;

class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { fav : false };
    this.toggleFavorites = this.toggleFavorites.bind(this);


  }



  toggleFavorites(e) {
    if
    (store.getState().includes(this.props.data))
  {
    console.log(this.props.data.name + ' removed from favorites');
    this.setState({fav : false})
    store.dispatch({type: 'SUB_FAVORITE', data: this.props.data});
    // alert(this.props.data.name + ' has been removed from favorites');

  }
    else{

    console.log(this.props.data.name + ' added to favorites');
    this.setState({fav : true})
    store.dispatch({type: 'ADD_FAVORITE', data: this.props.data});
    // alert(this.props.data.name + ' has been added to favorites');
  }


  }


  render() {
    let {name, description, url , screenshot} = this.props.data;
    return (
      <div className="cardComponent slideUp">
        <div className="CTA-container">
          <div className="CTA-wrapper">
            <div onClick={() => this.toggleFavorites(this.props.data)}
            className={this.state.fav ? "CTA-icon-selected" : "CTA-icon"}>
            <IconComponent icon={this.state.fav ? "favorited" : "favorite"}/></div>
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
