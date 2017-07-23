import React, { Component } from 'react';
import './home.component.css';

import Landing from '../units/landing/components/landing.component.js';
import OptionSelectorContainer from '../units/optionSelector/components/optionSelectorContainer.component.js';

class Home extends Component {
  getImages = () => {
   return [
     "./images/logo.jpg",
     "./images/details-cover.jpg"
   ];
 }

  render() {
    return(
      <div>
        <div className="background">
          <div className="elipse"></div>
        </div>
        { Landing() }
        <div className="option-selectors">
          <OptionSelectorContainer images={ this.getImages() } text="How much detail do you want?" />
        </div>
      </div>
    );
  }
}

export default Home;
