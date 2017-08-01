import React, { Component } from 'react';
import './stickyResponsiveEstimate.component.css';
import ItemizedEstimate from './itemizedEstimate.component.js';

const desktopWidth = 1100;

class StickyResponsiveEstimate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stickyClass: "",
      stickyObjectTop: {},

      $startBoundryObject: null,
      $endBoundryObject: null,
      boundryTriggerY: 0
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  handleScroll = () => {
    if(this.isDesktop()){
      this.updateStickState();
    }
  };

  initializeBoundryElements = () => {
    let $optionDisplays;
    let $startBoundryObject = this.state.$startBoundryObject;
    if($startBoundryObject === null){

      $optionDisplays = document.getElementsByClassName("option-display-container");
      if($optionDisplays === null){
        console.error("Can't find option displays for sticky boundry.");
        return;
      }

      $startBoundryObject = $optionDisplays[0];
      if($startBoundryObject === null){
        console.error("Can't find first option display for stick boundry.");
        return;
      }

      this.setState({ $startBoundryObject });
    }

    let $endBoundryObject = this.state.$endBoundryObject;
    if($endBoundryObject === null){
      $endBoundryObject = $optionDisplays[$optionDisplays.length - 1];
      if($endBoundryObject === null){
        console.error("Can't find end option display for stick boundry.");
        return;
      }

      this.setState({ $endBoundryObject });
    }

    let boundryTriggerY = this.state.boundryTriggerY;
    if(boundryTriggerY === 0){
      boundryTriggerY = (window.innerHeight / 2) - ($startBoundryObject.getBoundingClientRect().height / 2);
      this.setState({ boundryTriggerY });
    }
  }

  isAboveStickBoundry = () => {
    const { $startBoundryObject, boundryTriggerY } = this.state;

    if($startBoundryObject === null || boundryTriggerY === 0){
      this.initializeBoundryElements();
      return;
    }

    if($startBoundryObject.getBoundingClientRect().top >= boundryTriggerY){
      return true;
    }

    return false;
  }

  isBelowStickBoundry = () => {
    const { $endBoundryObject, boundryTriggerY } = this.state;

    if($endBoundryObject === null || boundryTriggerY === 0){
      this.initializeBoundryElements();
      return;
    }

    if($endBoundryObject.getBoundingClientRect().top <= boundryTriggerY){
      return true;
    }

    return false;
  }

  isWithinStickBoundry = () => {
    return !this.isAboveStickBoundry() && !this.isBelowStickBoundry();
  };

  updateStickState = () => {
    const isWithinStickBoundry = this.isWithinStickBoundry();

    if(isWithinStickBoundry && this.state.stickyClass !== "stick"){
      this.setState({
        stickyClass: "stick",
        stickyObjectTop: { top: (window.innerHeight / 2 - 100) + "px" }
      });
    }
    else if(!isWithinStickBoundry && this.state.stickyClass === "stick"){
      if(this.isAboveStickBoundry() && this.state.stickyClass !== "above-boundry") {
        this.setState({ stickyClass: "above-boundry", stickyObjectTop: {} });
      }
      else if(this.isBelowStickBoundry() && this.state.stickyClass !== "below-boundry") {
        this.setState({ stickyClass: "below-boundry", stickyObjectTop: {} });
      }
    }
  }

  isDesktop = () => {
    return window.innerWidth >= desktopWidth;
  };

  renderEstimate = () => {
    if(this.isDesktop()) {
      return (
        <div className={ "desktop-estimate " + this.state.stickyClass } style={ this.state.stickyObjectTop }>
          <ItemizedEstimate items={ this.props.items } total={ this.props.total }/>
        </div>
      );
    }

    return ( <div style={{width:"100px", height: "100px", backgroundColor: "red"}}></div> );
  }

  render() {
    return (
      <span>
        { this.renderEstimate() }
      </span>
    );
  };
}

export default StickyResponsiveEstimate;
