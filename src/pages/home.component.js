import React, { Component } from 'react';
import './home.component.css';

import IMAGES from '../constants/optionImageSets.js';
import NAMES from '../constants/optionNames.js';

import Landing from '../units/landing/components/landing.component.js';
import CommissionOptionPicker from '../units/commissionOptionPicker/containers/commissionOptionPicker.container.js';
import CommissionEstimate from '../units/estimate/containers/commissionEstimate.container.js';
import EstimateScrollTrigger from '../units/scrollTrigger/components/estimateScrollTrigger.component.js';
import InquiryFormContainer from '../units/form/containers/inquiryForm.container.js';
import HackyAssModalContainer from '../units/hackyAssModal/hackyAssModal.container.js';

class Home extends Component {
  constructor(props) {
    super(props);
    window.scrollTo(0,0);
  }

  render() {
    return(
      <div>
        <div className="background">
          <div className="elipse"></div>
        </div>
        { Landing() }

        <div className="option-selectors">

          <CommissionEstimate />

          <EstimateScrollTrigger>

            <CommissionOptionPicker
              name={ NAMES.LEVEL_OF_DETAIL }
              text="How much detail do you want?"
              spriteSheet={ IMAGES.LEVEL_OF_DETAIL }
              spriteSheetLarge={ IMAGES.LEVEL_OF_DETAIL_LARGE }
              length={4} />

            <CommissionOptionPicker
              name={ NAMES.FRAMING }
              text="How should it be framed?"
              spriteSheet={ IMAGES.FRAMING }
              spriteSheetLarge={ IMAGES.FRAMING_LARGE }
              length={3} />

            <CommissionOptionPicker
              name={ NAMES.NUMBER_OF_CHARACTERS }
              text="How many characters do you want?"
              spriteSheet={ IMAGES.NUMBER_OF_CHARACTERS }
              spriteSheetLarge={ IMAGES.NUMBER_OF_CHARACTERS_LARGE }
              length={5} />

          </EstimateScrollTrigger>

          <CommissionOptionPicker
            name={ NAMES.BACKGROUND }
            text="What type of background do you want?"
            spriteSheet={ IMAGES.BACKGROUND }
            spriteSheetLarge={ IMAGES.BACKGROUND_LARGE }
            length={3} />

        </div>

        <InquiryFormContainer />
        <HackyAssModalContainer />

      </div>
    );
  }
}

export default Home;
