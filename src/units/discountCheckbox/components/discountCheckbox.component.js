import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './discountCheckbox.component.css';
import Checkbox from './checkbox.component.js';

class DiscountCheckbox extends Component {

  handleClick = (isChecked) => {
    if(this.props.onClick) {
      this.props.onClick(isChecked);
    }
  };

  render() {
    return (
      <div className="discount-checkbox-container">
        <Checkbox label="Save 30%" onClick={ this.handleClick } />
        <div className="tooltip-indicator">?</div>
      </div>
    );
  };
};

DiscountCheckbox.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default DiscountCheckbox;
