import React, { Component } from 'react';
import './optionButtons.component.css';
import OptionButton from './optionButton.component.js';

class OptionButtons extends Component {

  constructor(props) {
    super(props);

    this.state = { activeIndex: 0 };
  }

  handleClick = id => {
    this.setState({ activeIndex: id });
    console.log('new index: ' + id);

    // TODO do tha animation.
  }

  render() {
    return (
      <div className="option-buttons-container">
        <OptionButton id="0" onClick={ this.handleClick } />
        <OptionButton id="1" onClick={ this.handleClick } />
        <OptionButton id="2" onClick={ this.handleClick } />
      </div>
    );
  }
}

export default OptionButtons;
