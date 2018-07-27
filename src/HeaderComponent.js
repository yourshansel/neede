import React, { Component } from 'react';
import './css/HeaderComponent.css';



class HeaderComponent extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div>
      <p className={this.props.filterCategory === "All" ? "header":"header-hidden"}>Design Resources</p>
      <p className={this.props.filterCategory === "All" ? "description":"description-hidden"}>A collection of useful online resources for designers.</p>
      <p className={this.props.filterCategory === "Colors" ? "header":"header-hidden"}>Colors</p>
      <p className={this.props.filterCategory === "Colors" ? "description":"description-hidden"}>Resources for color inspiration, palette management and more</p>
      <p className={this.props.filterCategory === "Community" ? "header":"header-hidden"}>Community</p>
      <p className={this.props.filterCategory === "Community" ? "description":"description-hidden"}>Design community to showcase your portfolio, ask questions or keep up with the latest news</p>
      <p className={this.props.filterCategory === "Icons" ? "header":"header-hidden"}>Icons</p>
      <p className={this.props.filterCategory === "Icons" ? "description":"description-hidden"}>Icons Description.</p>
      <p className={this.props.filterCategory === "Inspiration" ? "header":"header-hidden"}>Inspiration</p>
      <p className={this.props.filterCategory === "Inspiration" ? "description":"description-hidden"}>Inspiration Description.</p>
      <p className={this.props.filterCategory === "Photo" ? "header":"header-hidden"}>Photos</p>
      <p className={this.props.filterCategory === "Photo" ? "description":"description-hidden"}>Photos Description.</p>
      <p className={this.props.filterCategory === "Software" ? "header":"header-hidden"}>Software</p>
      <p className={this.props.filterCategory === "Software" ? "description":"description-hidden"}>Software Description.</p>
      <p className={this.props.filterCategory === "Typography" ? "header":"header-hidden"}>Typography</p>
      <p className={this.props.filterCategory === "Typography" ? "description":"description-hidden"}>Typography Description.</p>
      <p className={this.props.filterCategory === "UI" ? "header":"header-hidden"}>UI Design</p>
      <p className={this.props.filterCategory === "UI" ? "description":"description-hidden"}>UI Design Description.</p>
      <p className={this.props.filterCategory === "UX" ? "header":"header-hidden"}>UX Design</p>
      <p className={this.props.filterCategory === "UX" ? "description":"description-hidden"}>UX Design Description.</p>

      </div>
    )
  }
}

export default HeaderComponent;
