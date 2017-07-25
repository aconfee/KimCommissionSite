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
      this.props.onClick();
    }
  }

  render() {

    const { images, text = "" } = this.props;
    const { activeIndex } = this.state;

    return (
      <div className="option-selector-container">

        <ImageCarouselCoinflip images={ images } activeIndex={ activeIndex }/>

        <p className="font-size-small font-color-dark description-text">{ text }</p>
        <span className="font-size-small font-color-light buttons-before">$</span>

        <RoundButtonGroup length={ images.length } onClick={ this.handleClick }/>

        <span className="font-size-small font-color-light buttons-after">$$</span>
      </div>
    );
  }
}

OptionPicker.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default OptionPicker;
