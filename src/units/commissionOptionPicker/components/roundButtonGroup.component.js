import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './roundButtonGroup.component.css';
import RoundButton from './roundButton.component.js';

class RoundButtonGroup extends Component {

  constructor(props) {
    super(props);

    // Second answer: https://stackoverflow.com/questions/7944460/detect-safari-browser
    // SVG is super not supported in Safari. Degrade gracefully.
    let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    this.state = {
      activeIndicatorLocation: 0,
      isSafari
    };
  }

  handleClick = nextIndex => {
    this.setState({
      // 52 is tied to the sizes and margins defined in CSS.
      activeIndicatorAnimation: { transform: "translateX(" + (nextIndex * 52) + "px" }
    });

    if(this.props.onClick) {
      this.props.onClick(nextIndex);
    }
  }

  renderButtons = () => {
    let buttons = [];
    for(let i = 0; i < this.props.length; i++) {
      buttons.push( RoundButton({ index: i, onClick: this.handleClick}) );
    }

    return (
      <span>
        { buttons }
      </span>
    );
  }

  render() {
    const { activeIndicatorAnimation } = this.state;

    return (
      <div className="option-buttons-container" style={ this.state.isSafari ? { filter: "none" } : {}}>
        { this.renderButtons() }

        <div className="blob animate" style={ activeIndicatorAnimation }></div>
        <div className="blob blob2 animate" style={ activeIndicatorAnimation }></div>

        <svg className="goo-filter">
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

RoundButtonGroup.propTypes = {
  length: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

RoundButtonGroup.defaultProps = {
  onClick: null
};

export default RoundButtonGroup;
