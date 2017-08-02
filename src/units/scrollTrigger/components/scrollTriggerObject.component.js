import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './scrollTriggerObject.component.css';

class ScrollTriggerObject extends Component {

  constructor(props) {
    super(props);
    this.$el = null;
    this.isTriggered = false;
    this.isBeforeTrigger = false;
    this.isPastTrigger = false;
  };

  initScrollTriggerElement = ref => {
    this.$el = ref;
    window.addEventListener('scroll', this.update);
  };

  update = () => {
    const { startTriggerY, endTriggerY, onTrigger } = this.props;
    if(!this.$el) return;

    const rect = this.$el.getBoundingClientRect();
    let isTriggered, isPastTrigger, isBeforeTrigger = false;

    if(rect.top <= startTriggerY && rect.bottom >= endTriggerY) {
      isTriggered = true;
    }
    else if(rect.bottom <= endTriggerY) {
      isPastTrigger = true;
    }
    else if(rect.top >= startTriggerY) {
      isBeforeTrigger = true;
    }

    // Check if anything's actually changed.
    if(isTriggered !== this.isTriggered ||
      isBeforeTrigger !== this.isBeforeTrigger ||
      isPastTrigger !== this.isPastTrigger)
    {
      this.isTriggered = isTriggered;
      this.isBeforeTrigger = isBeforeTrigger;
      this.isPastTrigger = isPastTrigger;
      
      onTrigger(isTriggered, isBeforeTrigger, isPastTrigger);
    }
  };

  renderDebug = () => {
    if(this.props.debug){
      return (
        <div>
          <div className="start-debug" style={{ top: this.props.startTriggerY }}></div>
          <div className="end-debug" style={{ top: this.props.endTriggerY }}></div>
        </div>
      );
    }
  };

  render() {
    return (
      <div ref={ this.initScrollTriggerElement } className={ this.props.debug ? "debug" : "" }>
        { this.renderDebug() }
        { this.props.children }
      </div>
    );
  };
}

ScrollTriggerObject.propTypes = {
  startTriggerY: PropTypes.number.isRequired,
  endTriggerY: PropTypes.number.isRequired,
  onTrigger: PropTypes.func.isRequired,
  debug: PropTypes.bool
};

export default ScrollTriggerObject;
