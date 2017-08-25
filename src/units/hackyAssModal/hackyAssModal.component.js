import React, { Component } from 'react';
import './hackyAssModal.component.css';

class HackyAssModal extends Component {

  handleTooltipClick = () => {
    this.props.toggleMobileTooltipModal();
  };

  render() {
    if(!this.props.show) {
      return <span></span>
    }

    return (
      <div className="hacky-ass-modal">
        <div className="tooltip">
          <div className="tooltip-icon">?</div>
          <div className="ex" onClick={ this.handleTooltipClick }>
            <div className="line one"></div>
            <div className="line two"></div>
          </div>
          <p className="tooltip-info">
            Normally, you have a few opportunities to see
            the work in progress and request limited
            changes.
            <br />
            <br />
            <b>Save 10%</b> by agreeing to ‘as-is’ commission, where after
            our extensive initial meeting, you trust my
            professional judgement to give you the best
            work possible :)
          </p>
        </div>
      </div>
    );
  };
};

export default HackyAssModal;
