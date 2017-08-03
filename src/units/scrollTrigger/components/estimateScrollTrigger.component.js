import React, { Component } from 'react';
import ScrollTriggerObjectContainer from '../containers/scrollTriggerObject.container.js';

class EstimateScrollTrigger extends Component {

  constructor(props) {
    super(props);

    this.$el = null;

    this.state = {
      startTriggerY: 0,
      endTriggerY: 0
    };
  };

  initScrollTriggerElement = ref => {
    this.$el = ref;
  };

  componentDidMount = () => {
    this.updateTriggerPositions();
    window.addEventListener("resize", this.updateTriggerPositions);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateTriggerPositions);
  };

  isDesktop = () => {
    return window.innerWidth >= 1000;
  }

  updateTriggerPositions = () => {
    const startTriggerY = this.isDesktop() ? (window.innerHeight / 2) - 225 : (window.innerHeight / 2);
    const endTriggerY = this.isDesktop() ? startTriggerY - 130 : 0;

    this.setState({
      startTriggerY,
      endTriggerY
    });
  };

  render() {
    return (
      <div ref={ this.initScrollTriggerElement }>
        <ScrollTriggerObjectContainer
          startTriggerY={ this.state.startTriggerY }
          endTriggerY={ this.state.endTriggerY }
          name="stickyEstimateTrigger">

          { this.props.children }
        </ScrollTriggerObjectContainer>
      </div>
    );
  };
}

export default EstimateScrollTrigger;
