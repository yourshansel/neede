import React, { Component } from 'react';
import './css/CardComponent.css';








class BookComponent extends Component {



  render() {
    let {name, author, description, url , screenshot,} = this.props.data;



    return (
      <div className="cardComponent_wrapper">
          <div className="cardComponent slideUp">
            <img src={screenshot} alt="" className="cardComponent_img"/>
            <a href={url} className="cardComponent_name" target="_blank">{name}</a>
            <p className="cardComponent_author">by {author}</p>
            <p className="cardComponent_description">{description}</p>

        </div>
      </div>
      );
    };
  };




  export default BookComponent;
