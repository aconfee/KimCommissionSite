import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './optionSelectorContainer.component.css';
import OptionButtons from './optionButtons.component.js';
import OptionDisplay from './optionDisplay.component.js';

class OptionSelectorContainer extends Component {

  constructor(props) {
    super(props);

    this.state = { activeIndex: 0 }
  }

  handleClick = (nextIndex) => {
    // Get index from buttons and change the display.
    this.setState({ activeIndex: nextIndex });
  }

  render() {

    const { images, text } = this.props;
    const { activeIndex } = this.state;

    return (
      <div className="option-selector-container">

        <OptionDisplay images={ images } activeIndex={ activeIndex }/>

        <p className="font-size-small font-color-dark description-text">{ text }</p>
        <span className="font-size-small font-color-light buttons-before">$</span>

        <OptionButtons length={ images.length } onClick={ this.handleClick }/>

        <span className="font-size-small font-color-light buttons-after">$$</span>
      </div>
    );
  }
}

OptionSelectorContainer.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string
}

export default OptionSelectorContainer;
