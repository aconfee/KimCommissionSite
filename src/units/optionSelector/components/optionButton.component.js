import React, { Component } from 'react';
import './optionButton.component.css';

class OptionButton extends Component {

  handleClick = () => {
    this.props.onClick( this.props.id );
  }

  render() {
    return (
      <div className="button" onClick={ this.handleClick }></div>
    );
  }
}

export default OptionButton;
