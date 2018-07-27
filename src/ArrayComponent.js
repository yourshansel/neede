import React, { Component } from 'react';
import CardComponent from './CardComponent.js';
import FooterComponent from './FooterComponent.js';
import IconComponent from './IconComponent.js';

import data from './needelibrary.json';
import HeaderComponent from './HeaderComponent.js';

import './css/ArrayComponent.css';


class ArrayComponent extends Component {

  constructor() {
    super();
    this.state = { data, active: "All" }
    this.filterCategory = this.filterCategory.bind(this);
  }


  filterCategory = (categoryid) =>   {
    window.scrollTo(0, 0)
    this.setState({
      data: data.filter(data => data.category === categoryid),
      active: categoryid
    }
    )
  }

  allCategory = (categoryid) =>{
    window.scrollTo(0, 0)
    this.setState({
      data: data.filter(data => data.category !== ""),
      active: categoryid
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
        <div onClick={() => this.allCategory("All")} className={this.state.active === "All" ? "filter-button-active":"filter-button"}><IconComponent filterCategory={this.state.active} icon="home"/>Home</div>
        <div onClick={() => this.filterCategory("Colors")} className={this.state.active === "Colors" ? "filter-button-active":"filter-button"}><IconComponent filterCategory={this.state.active} icon="color"/>Colors</div>
        <div onClick={() => this.filterCategory("Community")} className={this.state.active === "Community" ? "filter-button-active":"filter-button"}><IconComponent filterCategory={this.state.active} icon="community"/>Community</div>
        <div onClick={() => this.filterCategory("Icons")} className={this.state.active === "Icons" ? "filter-button-active":"filter-button"}><IconComponent filterCategory={this.state.active} icon="icon"/>Icons</div>
        <div onClick={() => this.filterCategory("Inspiration")} className={this.state.active === "Inspiration" ? "filter-button-active":"filter-button"}><IconComponent filterCategory={this.state.active} icon="inspiration"/>Inspiration</div>
        <div onClick={() => this.filterCategory("Photo")} className={this.state.active === "Photo" ? "filter-button-active":"filter-button"}><IconComponent filterCategory={this.state.active} icon="photos"/>Photos</div>
        <div onClick={() => this.filterCategory("Software")} className={this.state.active === "Software" ? "filter-button-active":"filter-button"}><IconComponent filterCategory={this.state.active} icon="software"/>Software</div>
        <div onClick={() => this.filterCategory("Typography")} className={this.state.active === "Typography" ? "filter-button-active":"filter-button"}><IconComponent filterCategory={this.state.active} icon="typography"/>Typography</div>
        <div onClick={() => this.filterCategory("UI")} className={this.state.active === "UI" ? "filter-button-active":"filter-button"}><IconComponent filterCategory={this.state.active} icon="ui"/>UI Design</div>
        <div onClick={() => this.filterCategory("UX")} className={this.state.active === "UX" ? "filter-button-active":"filter-button"}><IconComponent filterCategory={this.state.active} icon="ux"/>UX Design</div>
      </div>
      <div>
        <HeaderComponent filterCategory={this.state.active} />
        <div className="array-component">{cardComps}</div>
        <p className="footer-component"><FooterComponent/></p>
      </div>
    </div>
    )
  }
}

export default ArrayComponent;
