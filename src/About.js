import React, { Component } from 'react';
import './css/MainComponent.css';

class About extends Component {






  render() {


    return (

      <div>
      <div className="header">About</div>
      <div className="about-header">What is Neede?</div>
      <div className="about-description">Neede is a hand-picked collection of online design resources. Neede started as a personal project to organise the different design resources that I use for my own projects. <br/><br/> Instead of burying them deep inside the bookmarks folder, I wanted a way to easily access some of my favourite websites and keep up with the newest design trends.</div>
      <div className="about-header">Who is it for?</div>
      <div className="about-description">Neede was created with the goal of sharing accessible design resources to people all over the world. I wanted to share them so that people can get inspiration and find the resources they need for their projects. </div>
      <div className="about-header">How does the favorites work?</div>
      <div className="about-description">When you click on the favourite button, the website is being saved on your browser’s local storage so you can manage and access them on the favourites tab.</div>
      <div className="about-header">Found something awesome that you want to share?</div>
      <div className="about-description">In order to make Neede useful for others, I need your feedback! Send me any links or categories you’d like to see added to Neede at <a href="mailto:yourshansel@gmail.com" className="about-link">yourshansel@gmail.com</a>.</div>
      <div className="about-description"><br/>Neede was founded and curated by <a href="https://twitter.com/yourshansel" className="about-link">Hansel Wong</a></div>
      <div className="about-spacer"/>
      </div>
    )
  }
}

export default About;
