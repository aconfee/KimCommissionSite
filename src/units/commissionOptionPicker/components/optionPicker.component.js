import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './optionPicker.component.css';
import RoundButtonGroup from './roundButtonGroup.component.js';
import ImageCarouselCoinflip from './imageCarouselCoinflip.component.js';

class OptionPicker extends Component {

  constructor(props) {
    super(props);

    this.state = { activeIndex: 0 }
  }

  handleClick = (nextIndex) => {
    // Get index from buttons and change the display.
    this.setState({ activeIndex: nextIndex });

    if(this.props.onClick) {
      this.props.onClick(nextIndex);
    }
  }

  render() {

    const { spriteSheet, spriteSheetLarge, length, text = "" } = this.props;
    const { activeIndex } = this.state;

    return (
      <div className="option-selector-container">

        <ImageCarouselCoinflip spriteSheet={ spriteSheet } spriteSheetLarge={ spriteSheetLarge } activeIndex={ activeIndex }/>

        <p className="font-size-small font-color-dark description-text">{ text }</p>
        <span className="font-color-light buttons-before">$</span>

        <RoundButtonGroup length={ length } onClick={ this.handleClick }/>

        <span className="font-color-light buttons-after">$$</span>
      </div>
    );
  }
}

OptionPicker.propTypes = {
  spriteSheet: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  text: PropTypes.string,
  onClick: PropTypes.func
};

OptionPicker.defaultProps = {
  text: "",
  onClick: null
};

export default OptionPicker;
