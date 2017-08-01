import React, { Component } from 'react';
import './stickyEstimateDesktop.component.css';
import ItemizedEstimate from './itemizedEstimate.component.js';

class StickyEstimateDesktop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stickyClass: "",
      stickyObjectTop: {},

      $triggerCollider: null
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  handleScroll = () => {
    this.updateStickState();
  };

  initializeBoundryElements = () => {
    let $triggerCollider = this.state.$triggerCollider;
    if($triggerCollider === null) {
      const $optionSelectors = document.getElementsByClassName("option-selectors");
      if($optionSelectors === null || $optionSelectors.length === 0){
        console.error("Could not find option-selectors by classname for trigger collider.");
        return;
      }

      $triggerCollider = $optionSelectors[0];
      this.setState({ $triggerCollider });
    }
  }

  screenAboveTriggerCollider = () => {

    if(this.state.$triggerCollider === null) {
      this.initializeBoundryElements();
      return;
    }

    const screenBottom = window.innerHeight;
    const triggerColliderRect = this.state.$triggerCollider.getBoundingClientRect();

    // Offset to wait for estimate to be in middle of screen.
    const triggerColliderTop = triggerColliderRect.top + (window.innerHeight / 2) + 225;

    if(triggerColliderTop >= screenBottom) {
      return true;
    }

    return false;
  }

  screenBelowTriggerCollider = () => {

    if(this.state.$triggerCollider === null) {
      this.initializeBoundryElements();
      return;
    }

    const screenTop = 0;
    const triggerColliderRect = this.state.$triggerCollider.getBoundingClientRect();

    // Offset to wait for estimate to be in middle of screen.
    const triggerColliderBottom = triggerColliderRect.bottom - (window.innerHeight / 2) - 329;

    if(triggerColliderBottom <= screenTop) {
      return true;
    }

    return false;
  }

  screenCollisionWithTriggerCollider = () => {
    return !this.screenAboveTriggerCollider() && !this.screenBelowTriggerCollider();
  };

  updateStickState = () => {
    const isWithinStickBoundry = this.screenCollisionWithTriggerCollider();

    if(isWithinStickBoundry && this.state.stickyClass !== "stick"){
      this.setState({
        stickyClass: "stick",
        stickyObjectTop: { top: (window.innerHeight / 2 - 100) + "px" }
      });
    }
    else if(!isWithinStickBoundry && this.state.stickyClass === "stick"){
      if(this.screenAboveTriggerCollider() && this.state.stickyClass !== "above-boundry") {
        this.setState({ stickyClass: "above-boundry", stickyObjectTop: {} });
      }
      else if(this.screenBelowTriggerCollider() && this.state.stickyClass !== "below-boundry") {
        this.setState({ stickyClass: "below-boundry", stickyObjectTop: {} });
      }
    }
  }

  render() {
    return (
      <div className={ "desktop-estimate " + this.state.stickyClass } style={ this.state.stickyObjectTop }>
        <ItemizedEstimate items={ this.props.items } total={ this.props.total }/>
      </div>
    );
  };
}

export default StickyEstimateDesktop;
