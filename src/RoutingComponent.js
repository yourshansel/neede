import React, { Component } from 'react';

import Home from './Home';
import Colors from './Colors';
import Community from './Community';
import Icons from './Icons';
import Inspiration from './Inspiration';
import Photos from './Photos';
import Software from './Software';
import Typography from './Typography';
import UI from './UI';
import UX from './UX';
import About from './About';
import Favorites from './Favorites'
import Branding from './Branding';
import Illustration from './Illustration';
import { connect } from 'react-redux';

import { Switch, Route, HashRouter } from 'react-router-dom';



import './css/MainComponent.css';


class RoutingComponent extends Component {



  render() {
    return (

      <div>
      <HashRouter>
      <Switch>
      <Route exact path="/"  component={Home} />
      <Route exact path="/Favorites" component={Favorites} />
      <Route exact path="/Branding" component={Branding} />
      <Route exact path="/Colors" component={Colors} />
      <Route exact path="/Community" component={Community} />
      <Route exact path="/Icons" component={Icons} />
      <Route exact path="/Illustration" component={Illustration} />
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

const mapStateToProps = state => {
    return {
        storeData: state
    };
};




export default connect(mapStateToProps)(RoutingComponent);
