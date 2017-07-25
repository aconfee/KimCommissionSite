import React, { Component } from 'react';
import './home.component.css';
import IMAGE_SETS from '../constants/optionImageSets.js';
import Landing from '../units/landing/components/landing.component.js';
import OptionPicker from '../units/commissionOptionPicker/components/optionPicker.component.js';
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
          <CommissionOptionPicker name="TEST" />
          <OptionPicker images={ IMAGE_SETS.FRAME_SKETCH } text="How should it be framed?" />
          <OptionPicker images={ IMAGE_SETS.LEVEL_OF_DETAIL_BUST } text="How much detail do you want?" />
          <OptionPicker images={ IMAGE_SETS.BACKGROUND } text="What type of background do you want?" />
          <OptionPicker images={ IMAGE_SETS.NUMBER_OF_CHARACTERS } text="How many characters do you want?" />
        </div>
        <h1>{ this.props.customCommission }</h1>
      </div>
    );
  }
}

export default Home;
