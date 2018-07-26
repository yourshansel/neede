import React, { Component } from 'react';
import CardComponent from './CardComponent.js';
import FooterComponent from './FooterComponent.js';

import data from './needelibrary.json';


import './css/ArrayComponent.css';


class ArrayComponent extends Component {

  constructor() {
    super();
    this.state = { data };
    this.filterCategory = this.filterCategory.bind(this);

  }


  filterCategory = (categoryid) =>   {
    window.scrollTo(0, 0)
    this.setState({
      data: data.filter(data => data.category === categoryid)
    }
    )
  }

  allCategory = () =>{
    window.scrollTo(0, 0)
    this.setState({
      data: data.filter(data => data.category !== "")
    }
    )
  }

  componentDidMount() {
  window.scrollTo(0, 0)
  }

  render() {


    let cardComps = this.state.data.map(data => {
      return (
        <CardComponent data = {data} />
      )
    })
    return (

    <div className="main-array">
      <div className="side-navigation">
        <div className="side-navigation-header">Categories</div>
        <div onClick={() => this.allCategory()} className="filter-button">Home</div>
        <div onClick={() => this.filterCategory("Colors")} className="filter-button">Colors</div>
        <div onClick={() => this.filterCategory("Community")} className="filter-button">Community</div>
        <div onClick={() => this.filterCategory("Icons")} className="filter-button">Icons</div>
        <div onClick={() => this.filterCategory("Inspiration")} className="filter-button">Inspiration</div>
        <div onClick={() => this.filterCategory("Photo")} className="filter-button">Photos</div>
        <div onClick={() => this.filterCategory("Software")} className="filter-button">Software</div>
        <div onClick={() => this.filterCategory("Typography")} className="filter-button">Typography</div>
        <div onClick={() => this.filterCategory("UI")} className="filter-button">UI Design</div>
        <div onClick={() => this.filterCategory("UX")} className="filter-button">UX Design</div>

      </div>
      <div>
        <p className="main-header">Design Resources</p>
        <p className="main-description">A collection of useful online resources for designers.</p>
        <div className="array-component">{cardComps}</div>
        <p className="footer-component"><FooterComponent/></p>
      </div>
    </div>
    )
  }
}

export default ArrayComponent;
