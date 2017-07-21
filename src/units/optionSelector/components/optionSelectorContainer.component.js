import React, { Component } from 'react';
import './optionSelectorContainer.component.css';
import OptionButtons from './optionButtons.component.js';

class OptionSelectorContainer extends Component {
  render() {
    return (
      <div className="option-selector-container">
        <p className="font-size-small font-color-dark description-text">How much detail do you want?</p>
        <span className="font-size-small font-color-light buttons-before">$</span>
        <OptionButtons />
        <span className="font-size-small font-color-light buttons-after">$$</span>
      </div>
    );
  }
}

export default OptionSelectorContainer;
