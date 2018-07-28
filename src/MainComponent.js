import React, { Component } from 'react';
import CardComponent from './CardComponent.js';
import IconComponent from './IconComponent.js';

import Home from './Home';
import Colors from './Colors.js';
import Community from './Community.js';
import Icons from './Icons';
import Inspiration from './Inspiration';
import Photos from './Photos';
import Software from './Software';
import Typography from './Typography';
import UI from './UI';
import UX from './UX';
import About from './About';

import { Switch, Route, HashRouter } from 'react-router-dom';

import data from './needelibrary.json';
import HeaderComponent from './HeaderComponent.js';

import './css/MainComponent.css';


class MainComponent extends Component {

  constructor() {
    super();
  }



  render() {
    return (

      <div>
      <HashRouter>
      <Switch>
      <Route exact path="/"  component={Home} />
      <Route exact path="/Colors" component={Colors} />
      <Route exact path="/Community" component={Community} />
      <Route exact path="/Icons" component={Icons} />
      <Route exact path="/Inspiration" component={Inspiration} />
      <Route exact path="/Photos" component={Photos} />
      <Route exact path="/Software" component={Software} />
      <Route exact path="/Typography" component={Typography} />
      <Route exact path="/UI-Design" component={UI} />
      <Route exact path="/UX-Design" component={UX} />
      <Route exact path="/About" component={About} />
      </Switch>
      </HashRouter>
      </div>
    )
  }
}

export default MainComponent;
