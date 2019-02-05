import React, { Component } from 'react';
import './css/MainComponent.css';
import CardComponent from './CardComponent.js';
import { store } from './App.js';

class Favorites extends Component {
    constructor(props) {
        super(props);
        this.favToggle = this.favToggle.bind(this);
        this.state = {
            storeData: []
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.storeData !== this.state.storeData){
            this.setState({
                storeData: nextProps.storeData
            })
        }
    }

    favToggle(){
      this.setState(prevState => ({
          fav: !prevState.fav
        }));

    }







  render() {


        let cardComps = store.getState().map((data, index) => {
            return <CardComponent data = {data} key = {index}  />});

    return (

      <div>
      <div className="header">Favorites</div>
      <div className="description">Your favorite design resources all in one place.</div>
      <div className="array-component">{cardComps}</div>

      </div>
    )
  }
}





export default Favorites;
