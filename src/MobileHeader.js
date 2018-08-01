import React, { Component } from 'react';
import './css/MainComponent.css';
import IconComponent from './IconComponent.js';

class MobileHeader extends Component {





  render(){
    return(

      <div className="mobile-header">
        <div className="mobile-container">
        <div onClick={this.props.menuToggle} className={this.props.isToggleOn ? "mobile-menu-off":"mobile-menu"}><IconComponent icon="menu"/></div>
        <div onClick={this.props.menuToggle} className={this.props.isToggleOn ? "mobile-overlay":"mobile-overlay-off"}/>
        <div className="neede-logo"/>
        <div className="mobile-menu-off"/>
        </div>
      </div>
      )
    }
  }


export default MobileHeader;
