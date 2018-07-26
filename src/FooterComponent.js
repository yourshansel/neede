import React, { Component } from 'react';
import './css/FooterComponent.css';


class FooterComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div className="footer-component-background">
        <div>
          <p className="footer-component-header">About</p>
          <p className="footer-component-description">Neede is a hand-picked collection of online design resources that are helpful for designers working on various projects.</p>
          <p className="footer-component-description">In order to make Neede helpful for other designers, I need your contribution! Send me any links or suggested categories that you think would be useful to you or other designers.</p>
          <p className="footer-component-description">Drop me an email at: <a href="mailto:yourshansel@gmail.com">yourshansel@gmail.com</a></p>
            </div>
        <div>
      <p className="footer-component-header">Subscribe to our newsletter for updates</p>
      <p className="footer-component-description">© 2018 Neede. All Rights Reserved</p>
        </div>
      </div>

      );
    };
  };
export default FooterComponent;
