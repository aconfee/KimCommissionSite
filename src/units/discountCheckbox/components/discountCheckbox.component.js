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

  // This is without a doubt the hackiest fucking code I've written in my whole goddamn life.
  // Parent css transforms are making it impossible to set tooltip to fixed position, so I need
  // to make a separate modal if mobile.
  handleTooltipClick = () => {
    if(window.innerWidth <= 1000){
      this.props.toggleMobileTooltipModal();
    }
  };

  render() {
    return (
      <div className="discount-checkbox-container">
        <Checkbox label="Save 30%" onClick={ this.handleClick } isChecked={ this.props.isChecked }/>
        <div className="tooltip-indicator" onClick={ this.handleTooltipClick }>?
          <div className="tooltip">
            <div className="tooltip-icon">?</div>
            <p className="tooltip-info">
              Normally, you have a few opportunities to see
              the work in progress and request limited
              changes.
              <br />
              <br />
              <b>Save 30%</b> by agreeing to ‘as-is’ commission, where after
              our extensive initial meeting, you trust my
              professional judgement to give you the best
              work possible :)
            </p>
          </div>
        </div>
      </div>
    );
  };
};

DiscountCheckbox.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default DiscountCheckbox;
