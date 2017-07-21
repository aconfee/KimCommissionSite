import React, { Component } from 'react';
import './optionButtons.component.css';
import OptionButton from './optionButton.component.js';

class OptionButtons extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      activeIndicatorLocation: 0
     };
  }

  handleClick = id => {
    this.setState({
      activeIndex: id,
      // 52 is tied to the sizes and margins defined in CSS.
      activeIndicatorAnimation: { transform: "translateX(" + (id * 52) + "px" }
    });
  }

  render() {
    return (
      <div>
        <div className="option-buttons-container">
          <OptionButton id={0} onClick={ this.handleClick } />
          <OptionButton id={1} onClick={ this.handleClick } />
          <OptionButton id={2} onClick={ this.handleClick } />

          <div className="blob animate" style={ this.state.activeIndicatorAnimation }></div>
          <div className="blob blob2 animate" style={ this.state.activeIndicatorAnimation }></div>
        </div>

        <svg>
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
      </div>
    );
  }
}

export default OptionButtons;
