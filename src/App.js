import React, { Component } from 'react';
import { Container, Row, Button } from 'reactstrap';
import CardComponent from './CardComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import data from './needelibrary.json';

class App extends Component {
  constructor() {
    super();
    this.state = {  data  }
  }


    render() {
      let cardComps = this.state.data.map(data => {
        return (
          <CardComponent data = {data} />
        )
      })
      return (
      <div className="mainApp">
          <Row>
          {cardComps}
          </Row>
      </div>
      )
    }
  }

export default App;
