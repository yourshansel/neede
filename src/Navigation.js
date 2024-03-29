import React, { Component } from "react";
import { HashRouter, NavLink, Switch } from "react-router-dom";
import Analytics from "react-router-ga";
import "./css/MainComponent.css";
import IconComponent from "./IconComponent.js";

class Navigation extends Component {
  render() {
    return (
      <div className={this.props.isToggleOn ? "nav-on" : "nav"}>
        <HashRouter>
          <Analytics id='UA-123483640-1' debug>
            <Switch>
              <div className='nav-wrapper'>
                <div className='nav-content'>
                  <div className='nav-header'>Categories</div>
                  <NavLink
                    exact
                    to='/'
                    className='nav-button'
                    activeStyle={{
                      fontFamily: "Montserrat-Medium",
                      color: "#5156E5",
                      fill: "#5156E5",
                    }}
                    onClick={() => this.props.componentDidMount()}>
                    <IconComponent icon='home' />
                    <div className='spacer' />
                    Home
                  </NavLink>
                  <NavLink
                    to='/Favorites'
                    className='nav-button'
                    activeStyle={{
                      fontFamily: "Montserrat-Medium",
                      color: "#5156E5",
                      fill: "#5156E5",
                    }}
                    onClick={() => this.props.componentDidMount()}>
                    <IconComponent icon='favorite' />
                    <div className='spacer' />
                    Favorites
                  </NavLink>
                  <a
                    href='https://medium.com/designer-things/?ref=neede.co'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='nav-button'
                    activeStyle={{
                      fontFamily: "Montserrat-Medium",
                      color: "#5156E5",
                      fill: "#5156E5",
                    }}
                    onClick={() => this.props.componentDidMount()}>
                    <IconComponent icon='templates' />
                    <div className='spacer' />
                    Articles
                  </a>
                  <NavLink
                    to='/Animation'
                    className='nav-button'
                    activeStyle={{
                      fontFamily: "Montserrat-Medium",
                      color: "#5156E5",
                      fill: "#5156E5",
                    }}
                    onClick={() => this.props.componentDidMount()}>
                    <IconComponent icon='animation' />
                    <div className='spacer' />
                    Animation
                  </NavLink>
                  <NavLink
                    to='/Branding'
                    className='nav-button'
                    activeStyle={{
                      fontFamily: "Montserrat-Medium",
                      color: "#5156E5",
                      fill: "#5156E5",
                    }}
                    onClick={() => this.props.componentDidMount()}>
                    <IconComponent icon='branding' />
                    <div className='spacer' />
                    Branding
                  </NavLink>
                  <NavLink
                    to='/Colors'
                    className='nav-button'
                    activeStyle={{
                      fontFamily: "Montserrat-Medium",
                      color: "#5156E5",
                      fill: "#5156E5",
                    }}
                    onClick={() => this.props.componentDidMount()}>
                    <IconComponent icon='color' />
                    <div className='spacer' />
                    Colors
                  </NavLink>
                  <NavLink
                    to='/Community'
                    className='nav-button'
                    activeStyle={{
                      fontFamily: "Montserrat-Medium",
                      color: "#5156E5",
                      fill: "#5156E5",
                    }}
                    onClick={() => this.props.componentDidMount()}>
                    <IconComponent icon='community' />
                    <div className='spacer' />
                    Community
                  </NavLink>
                  <NavLink
                    to='/Icons'
                    className='nav-button'
                    activeStyle={{
                      fontFamily: "Montserrat-Medium",
                      color: "#5156E5",
                      fill: "#5156E5",
                    }}
                    onClick={() => this.props.componentDidMount()}>
                    <IconComponent icon='icon' />
                    <div className='spacer' />
                    Icons
                  </NavLink>
                  <NavLink
                    to='/Illustration'
                    className='nav-button'
                    activeStyle={{
                      fontFamily: "Montserrat-Medium",
                      color: "#5156E5",
                      fill: "#5156E5",
                    }}
                    onClick={() => this.props.componentDidMount()}>
                    <IconComponent icon='illustration' />
                    <div className='spacer' />
                    Illustration
                  </NavLink>
                  <NavLink
                    to='/Inspiration'
                    className='nav-button'
                    activeStyle={{
                      fontFamily: "Montserrat-Medium",
                      color: "#5156E5",
                      fill: "#5156E5",
                    }}
                    onClick={() => this.props.componentDidMount()}>
                    <IconComponent icon='inspiration' />
                    <div className='spacer' />
                    Inspiration
                  </NavLink>
                  <NavLink
                    to='/Photos'
                    className='nav-button'
                    activeStyle={{
                      fontFamily: "Montserrat-Medium",
                      color: "#5156E5",
                      fill: "#5156E5",
                    }}
                    onClick={() => this.props.componentDidMount()}>
                    <IconComponent icon='photos' />
                    <div className='spacer' />
                    Photos
                  </NavLink>
                  <NavLink
                    to='/Software'
                    className='nav-button'
                    activeStyle={{
                      fontFamily: "Montserrat-Medium",
                      color: "#5156E5",
                      fill: "#5156E5",
                    }}
                    onClick={() => this.props.componentDidMount()}>
                    <IconComponent icon='software' />
                    <div className='spacer' />
                    Software
                  </NavLink>
                  <NavLink
                    to='/Templates'
                    className='nav-button'
                    activeStyle={{
                      fontFamily: "Montserrat-Medium",
                      color: "#5156E5",
                      fill: "#5156E5",
                    }}
                    onClick={() => this.props.componentDidMount()}>
                    <IconComponent icon='templates' />
                    <div className='spacer' />
                    Templates
                  </NavLink>
                  <NavLink
                    to='/Typography'
                    className='nav-button'
                    activeStyle={{
                      fontFamily: "Montserrat-Medium",
                      color: "#5156E5",
                      fill: "#5156E5",
                    }}
                    onClick={() => this.props.componentDidMount()}>
                    <IconComponent icon='typography' />
                    <div className='spacer' />
                    Typography
                  </NavLink>
                  <NavLink
                    to='/UI-Design'
                    className='nav-button'
                    activeStyle={{
                      fontFamily: "Montserrat-Medium",
                      color: "#5156E5",
                      fill: "#5156E5",
                    }}
                    onClick={() => this.props.componentDidMount()}>
                    <IconComponent icon='ui' />
                    <div className='spacer' />
                    UI Design
                  </NavLink>
                  <NavLink
                    to='/UX-Design'
                    className='nav-button'
                    activeStyle={{
                      fontFamily: "Montserrat-Medium",
                      color: "#5156E5",
                      fill: "#5156E5",
                    }}
                    onClick={() => this.props.componentDidMount()}>
                    <IconComponent icon='ux' />
                    <div className='spacer' />
                    UX Design
                  </NavLink>
                </div>
                <div className='nav-footer'>
                  <div className='nav-footer-block'>
                    <NavLink
                      to='/About'
                      className='nav-footer-item'
                      onClick={() => this.props.componentDidMount()}>
                      About
                    </NavLink>
                    <a
                      href='https://forms.gle/mGxP6sEr6uzEaxV46'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='nav-footer-item'>
                      Submit
                    </a>
                  </div>
                  <div className='nav-footer-block'></div>
                  <div className='nav-copyright'>© 2022 Neede Design Co.</div>
                </div>
              </div>

              <div></div>
            </Switch>
          </Analytics>
        </HashRouter>
      </div>
    );
  }
}

export default Navigation;
