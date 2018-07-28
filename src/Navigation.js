import React, { Component } from 'react';
import './css/MainComponent.css';
import IconComponent from './IconComponent.js';
import { NavLink, Switch, HashRouter, Route } from 'react-router-dom';






class Navigation extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
   window.scrollTo(0, 0);
}

  render(){
    return(

      <div className="nav">
        <div className="nav-header">Categories</div>
        <HashRouter>
          <Switch>
        <div>
          <NavLink exact to="/" className="nav-button" activeStyle={{fontWeight: '560',color: '#5156E5',fill: '#5156E5'}} onClick={() => this.componentDidMount()}><IconComponent icon="home"/>Home</NavLink>
          <NavLink to="/Colors"  className="nav-button" activeStyle={{fontWeight: '560',color: '#5156E5',fill: '#5156E5'}} onClick={() => this.componentDidMount()}><IconComponent icon="color"/>Colors</NavLink>
          <NavLink to="/Community"  className="nav-button" activeStyle={{fontWeight: '560',color: '#5156E5',fill: '#5156E5'}} onClick={() => this.componentDidMount()}><IconComponent icon="community"/>Community</NavLink>
          <NavLink to="/Icons"  className="nav-button" activeStyle={{fontWeight: '560',color: '#5156E5',fill: '#5156E5'}} onClick={() => this.componentDidMount()}><IconComponent icon="icon"/>Icons</NavLink>
          <NavLink to="/Inspiration"  className="nav-button" activeStyle={{fontWeight: '560',color: '#5156E5',fill: '#5156E5'}} onClick={() => this.componentDidMount()}><IconComponent icon="inspiration"/>Inspiration</NavLink>
          <NavLink to="/Photos"  className="nav-button" activeStyle={{fontWeight: '560',color: '#5156E5',fill: '#5156E5'}} onClick={() => this.componentDidMount()}><IconComponent icon="photos"/>Photos</NavLink>
          <NavLink to="/Software"  className="nav-button" activeStyle={{fontWeight: '560',color: '#5156E5',fill: '#5156E5'}} onClick={() => this.componentDidMount()}><IconComponent icon="software"/>Software</NavLink>
          <NavLink to="/Typography"  className="nav-button" activeStyle={{fontWeight: '560',color: '#5156E5',fill: '#5156E5'}} onClick={() => this.componentDidMount()}><IconComponent icon="typography"/>Typography</NavLink>
          <NavLink to="/UI-Design"  className="nav-button" activeStyle={{fontWeight: '560',color: '#5156E5',fill: '#5156E5'}} onClick={() => this.componentDidMount()}><IconComponent icon="ui"/>UI Design</NavLink>
          <NavLink to="/UX-Design"  className="nav-button" activeStyle={{fontWeight: '560',color: '#5156E5',fill: '#5156E5'}} onClick={() => this.componentDidMount()}><IconComponent icon="ux"/>UX Design</NavLink>

          <div className="nav-footer">
            <NavLink to="/About"  className="nav-footer-item" onClick={() => this.componentDidMount()}>About</NavLink>
            <a href="mailto:yourshansel@gmail.com" className="nav-footer-item">Contact</a>
            <p className="nav-copyright">© 2018 Neede Design.</p>
          </div>

        </div>

        <div>

          </div>
          </Switch>
          </HashRouter>
        </div>

    )
  }

}

export default Navigation;
