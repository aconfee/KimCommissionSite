import React, { Component } from 'react';
import './optionSelectorContainer.component.css';
import OptionButtons from './optionButtons.component.js';
import OptionDisplay from './optionDisplay.component.js';

class OptionSelectorContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    }

    // TESTING ONLY
    setTimeout(function() {
      this.setState({ activeIndex: 1 });
    }.bind(this),
    3000);
  }

   getImages = () => {
    // TODO: This will become props that are passed in to the selector container.
    // This will drive how many buttons appear as well. This basically controls
    // how this entire thing will render / behave.
    return [
      "./images/logo.jpg",
      "./images/details-cover.jpg"
    ];
  }

  render() {
    return (
      <div className="option-selector-container">

        <OptionDisplay images={ this.getImages() } activeIndex={ this.state.activeIndex }/>

        <p className="font-size-small font-color-dark description-text">How much detail do you want?</p>
        <span className="font-size-small font-color-light buttons-before">$</span>
        <OptionButtons />
        <span className="font-size-small font-color-light buttons-after">$$</span>
      </div>
    );
  }
}

export default OptionSelectorContainer;
