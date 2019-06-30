import React, { Component } from 'react';
import './css/MainComponent.css';



class About extends Component {






  render() {


    return (

      <div>

      <div className="header">About</div>
      <div className="about-header">What is Neede?</div>
      <div className="about-description">Neede is a hand-picked collection of online design resources. Neede started as a personal project to organise the different design resources that I use for my own projects but quickly grew to a place to share online design resources with other designers.</div>
      <div className="about-header">Favoriting a Website</div>
      <div className="about-description">When you click on the favourite button, the website is being saved on your browser’s local storage so you can manage and access them on the favourites tab.</div>
      <div className="about-header">Found something awesome that you want to share?</div>
      <div className="about-description">Send me any links or categories you’d like to see added to Neede by clicking on the Submit button. If you'd like to support this website, click on the Donate button or drop me a message at <a href="mailto:yourshansel@email.com" className="about-link">yourshansel@gmail.com</a> just to say hi!</div>
      <div className="about-description"><br/>Curated by <a href="https://twitter.com/yourshansel" className="about-link">Hansel Wong</a></div>
      <div className="about-spacer"/>
      </div>
    )
  }
}

export default About;
