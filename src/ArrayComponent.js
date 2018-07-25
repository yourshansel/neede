import React, { Component } from 'react';
import data from './needelibrary.json';
import CardComponent from './CardComponent.js';
import './css/ArrayComponent.css';
import { Button } from 'reactstrap';


class ArrayComponent extends Component {
  constructor() {
    super();
    this.state = { data }
    this.filterCategory = this.filterCategory.bind(this);

  }

  filterCategory = () =>{
    this.setState({
      data: data.filter(data => data.category ===  "Photo")
    }
    )
  }

  render() {
    // filter by current state filter
    let cardComps = this.state.data.map(data => {
      return (
        <CardComponent data = {data} />
      )
    })
    return (
    <div className="array-component">
        <Button onClick={this.filterCategory}>Photo</Button>
        {cardComps}
    </div>
    )
  }
}

export default ArrayComponent;
