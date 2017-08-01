import React, { Component } from 'react';
import './home.component.css';

import IMAGES from '../constants/optionImageSets.js';
import NAMES from '../constants/optionNames.js';

import Landing from '../units/landing/components/landing.component.js';
import CommissionOptionPicker from '../units/commissionOptionPicker/containers/commissionOptionPicker.container.js';
import CommissionEstimate from '../units/estimate/containers/commissionEstimate.container.js';

class Home extends Component {
  render() {
    return(
      <div>
        <div className="background">
          <div className="elipse"></div>
        </div>
        { Landing() }
        <div className="option-selectors">

          <CommissionEstimate />

          <CommissionOptionPicker
            name={ NAMES.LEVEL_OF_DETAIL }
            text="How much detail do you want?"
            images={ IMAGES.LEVEL_OF_DETAIL } />

          <CommissionOptionPicker
            name={ NAMES.FRAMING }
            text="How should it be framed?"
            images={ IMAGES.FRAMING } />

          <CommissionOptionPicker
            name={ NAMES.NUMBER_OF_CHARACTERS }
            text="How many characters do you want?"
            images={ IMAGES.NUMBER_OF_CHARACTERS } />

          <CommissionOptionPicker
            name={ NAMES.BACKGROUND }
            text="What type of background do you want?"
            images={ IMAGES.BACKGROUND } />
        </div>
      </div>
    );
  }
}

export default Home;
