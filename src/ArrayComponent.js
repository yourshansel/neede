import React, { Component } from 'react';
import CardComponent from './CardComponent.js';
import FooterComponent from './FooterComponent.js';

import data from './needelibrary.json';

import './css/ArrayComponent.css';


class ArrayComponent extends Component {

  constructor() {
    super();
    this.state = { data, active: 0 }
    this.filterCategory = this.filterCategory.bind(this);
    this.toggleClass = this.toggleClass.bind(this);

  }

  toggleClass = (i) => {
    this.setState({
       active: i });
  };

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
        <div onClick={() => {this.allCategory(), this.toggleClass(0)}} className={this.state.active === 0 ? "filter-button-active":"filter-button"}>Home</div>
        <div onClick={() => {this.filterCategory("Colors"), this.toggleClass(1)}} className={this.state.active === 1 ? "filter-button-active":"filter-button"}>Colors</div>
        <div onClick={() => {this.filterCategory("Community"), this.toggleClass(2)}} className={this.state.active === 2 ? "filter-button-active":"filter-button"}>Community</div>
        <div onClick={() => {this.filterCategory("Icons"), this.toggleClass(3)}} className={this.state.active === 3 ? "filter-button-active":"filter-button"}>Icons</div>
        <div onClick={() => {this.filterCategory("Inspiration"), this.toggleClass(4)}} className={this.state.active === 4 ? "filter-button-active":"filter-button"}>Inspiration</div>
        <div onClick={() => {this.filterCategory("Photo"), this.toggleClass(5)}} className={this.state.active === 5 ? "filter-button-active":"filter-button"}>Photos</div>
        <div onClick={() => {this.filterCategory("Software"), this.toggleClass(6)}} className={this.state.active === 6 ? "filter-button-active":"filter-button"}>Software</div>
        <div onClick={() => {this.filterCategory("Typography"), this.toggleClass(7)}} className={this.state.active === 7 ? "filter-button-active":"filter-button"}>Typography</div>
        <div onClick={() => {this.filterCategory("UI"), this.toggleClass(8)}} className={this.state.active === 8 ? "filter-button-active":"filter-button"}>UI Design</div>
        <div onClick={() => {this.filterCategory("UX"), this.toggleClass(9)}} className={this.state.active === 9 ? "filter-button-active":"filter-button"}>UX Design</div>

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
