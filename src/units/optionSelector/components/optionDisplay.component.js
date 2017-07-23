import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './optionDisplay.component.css';

PropTypes.OptionDisplay = {
  images: PropTypes.arrayOf(PropTypes.string),
  activeIndex: PropTypes.number
}

class OptionDisplay extends Component {

  constructor(props) {
    super(props);

    const {
      images,
      activeIndex
    } = this.props;

    this.state = {
      frontImageUrl: images[activeIndex],
      backImageUrl: images[activeIndex + 1]
    };
  }

  componentWillReceiveProps(nextProps) {
    this.playAnimation();

    setTimeout(function() {
      this.resetAnimtion();
    }.bind(this),
    3000);
  }

  playAnimation = () => {
    console.log('playing animation');
  }

  resetAnimtion = () => {
    console.log('reseting animation');
  }

  render() {

    // This will all change. Will only use state.frontImageUrl and state.backImageUrl
    // These states are modified in constructor and willReceiveProps/playanimation.
    // shouldn't have to derive anything here.
    return (
      <div className="option-display-container">
        <div className='flipable'>
          <div className='front'>
            <img className="display-image" src={ this.state.frontImageUrl } alt="level of detail display" title="level of detail display" />
          </div>
          <div className='back'>
            <img className="display-image" src={ this.state.backImageUrl } alt="level of detail display" title="level of detail display" />
          </div>
        </div>
      </div>
    );
  }
}

export default OptionDisplay;
