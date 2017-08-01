import React, { Component } from 'react';
import './scrollTriggerObject.component.css';

class ScrollTriggerObject extends Component {

  constructor(props) {
    super(props);
    this.$el = null;
  };

  initScrollTriggerElement = ref => {
    this.$el = ref;
    window.addEventListener('scroll', this.handleScroll);
  };

  handleScroll = () => {
    const { startTriggerY, endTriggerY } = this.props;
    const rect = this.$el.getBoundingClientRect();

    if(rect.top <= startTriggerY && rect.bottom >= endTriggerY) {
      console.log('isTriggered');
    }
    else if(rect.bottom <= endTriggerY) {
      console.log('isPassedTrigger');
    }
    else if(rect.top >= startTriggerY) {
      console.log('isBeforeTrigger');
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

export default ScrollTriggerObject;
