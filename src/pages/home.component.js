import React, { Component } from 'react';
import './home.component.css';

import Landing from '../units/landing/components/landing.component.js';
import OptionButtons from '../units/optionSelector/components/optionButtons.component.js';

class Home extends Component {
  render() {
    return(
      <div>
        <div className="background">
          <div className="elipse"></div>
        </div>
        { Landing() }
        <OptionButtons />
      </div>
    );
  }
}

export default Home;
