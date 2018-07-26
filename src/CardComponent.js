import React, { Component } from 'react';
import './css/CardComponent.css';

class CardComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {category, name, description, url , screenshot} = this.props.data;
    return (
      <div className="cardComponent">
      <img  src={screenshot} alt="" className="cardComponent_img"/>
      <a href={url} className="cardComponent_name" target="_blank">{name}</a>
      <p className="cardComponent_description">{description}</p>
      </div>
      );
    };
  };
export default CardComponent;
