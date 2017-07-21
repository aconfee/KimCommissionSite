import React, { Component } from 'react';
import './home.component.css';

import Landing from '../units/landing/components/landing.component.js';
import OptionSelectorContainer from '../units/optionSelector/components/optionSelectorContainer.component.js';

class Home extends Component {
  render() {
    return(
      <div>
        <div className="background">
          <div className="elipse"></div>
        </div>
        { Landing() }
        <div className="option-selectors">
          <OptionSelectorContainer />
        </div>
      </div>
    );
  }
}

export default Home;
