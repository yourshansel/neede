import React, { Component } from 'react';
import './css/MainComponent.css';



class CarbonAd extends Component{


  componentDidMount(){
    const carbonAdscript = document.createElement("script");
        carbonAdscript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DVK7I&placement=needeco";
        carbonAdscript.async = true;
        document.body.appendChild(carbonAdscript);

    console.log("updating")
  }




  render(){


    return(
      <div className="carbon-ad-wrapper">
      <div className="carbon-ad-tag">Sponsored</div>
      <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CK7DVK7I&placement=needeco" id="_carbonads_js"></script>
      </div>
    )
  }
}


export default CarbonAd;
