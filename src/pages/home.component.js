import React, { Component } from 'react';
import './home.component.css';
import { OPTION_IMAGE_SETS } from '../constants/optionImageSets.js';
import OPTION_NAMES from '../constants/optionNames.js';
import Landing from '../units/landing/components/landing.component.js';
import CommissionOptionPicker from '../units/commissionOptionPicker/containers/commissionOptionPicker.container.js';

class Home extends Component {
  render() {
    return(
      <div>
        <div className="background">
          <div className="elipse"></div>
        </div>
        { Landing() }
        <div className="option-selectors">
          <CommissionOptionPicker
            name={ OPTION_NAMES.FRAMING }
            text="How should it be framed?" />
          <CommissionOptionPicker
            name={ OPTION_NAMES.LEVEL_OF_DETAIL }
            text="How much detail do you want?" />
          <CommissionOptionPicker
            name={ OPTION_NAMES.BACKGROUND }
            text="What type of background do you want?"
            images={ OPTION_IMAGE_SETS.BACKGROUND } />
          <CommissionOptionPicker
            name={ OPTION_NAMES.NUMBER_OF_CHARACTERS }
            text="How many characters do you want?"
            images={ OPTION_IMAGE_SETS.NUMBER_OF_CHARACTERS } />
        </div>
      </div>
    );
  }
}

export default Home;
