import React, { Component } from 'react';
import './css/MainComponent.css';
import CardComponent from './CardComponent.js';
import data from './needelibrary.json';
import { uniqBy, sortBy } from 'lodash';
import { store } from './App.js';
import CarbonAd from './CarbonAd.js';
import SearchInput, {createFilter} from 'react-search-input'


const KEYS_TO_FILTERS = ['category','name', 'description']

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { data, searchTerm: '' };
    this.searchUpdated = this.searchUpdated.bind(this)
}



  render() {



    const mergedData =  uniqBy(store.getState().concat(this.state.data), "name");
    const filteredComp = mergedData.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    let cardComps = sortBy(filteredComp, "name").map((data, index) =>
      {
      return (

        <CardComponent data = {data} key={index}/>
      )
    });

    cardComps.splice(5, 0, <CarbonAd/>);







    return (

      <div>
      <div className="header">Neede Design Resources</div>
      <div className="description">A collection of useful online resources for designers.</div>
      <SearchInput className="search-input" onChange={this.searchUpdated} placeholder = 'Search for resources...'/>
      <div className="array-component">{cardComps}</div>


      </div>



    )
  }
  searchUpdated (term) {
      this.setState({searchTerm: term})
    }
}




export default Home;
