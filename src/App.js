import React, { Component } from 'react';
import RoutingComponent from './RoutingComponent.js';
import Navigation from './Navigation.js';
import MobileHeader from './MobileHeader.js';
import './css/App.css';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import { rootReducer } from './CardComponent';
import { loadState, saveState } from './localStorage.js';

class App extends Component {
  constructor() {
    super();
    this.state = { isToggleOn: false }
    this.menuToggle = this.menuToggle.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  menuToggle() {
    this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }

  componentDidMount() {
     window.scrollTo(0, 0);
     this.setState ({
       isToggleOn: false
     })
  }



    render() {
      return(
      <div className="main-background">
      <MobileHeader menuToggle={this.menuToggle} isToggleOn={this.state.isToggleOn}/>
      <Navigation isToggleOn={this.state.isToggleOn} componentDidMount={this.componentDidMount}/>
      <RoutingComponent />
      </div>
      )
    }
  }



  const persistedState = loadState();
  export const store = createStore(rootReducer, persistedState, applyMiddleware(createLogger()));

  store.subscribe(() => {
    saveState(store.getState());
  });



export default App;
