import React, { Component } from 'react';
import './desktopCommissionEstimate.component.css';
import ItemizedEstimate from './itemizedEstimate.component.js';

class DesktopCommissionEstimate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stickyClass: "",
      stickyObjectTop: { top: ""}
    };
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.updateOnResize);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateOnResize);
  };

  componentWillUpdate = (nextProps, nextState) => {
    this.update(nextProps, nextState);
  };

  isDesktop = () => {
    return window.innerWidth >= 1000;
  }

  updateOnResize = () => {
    this.update(this.props, this.state);
  };

  update = (props, state) => {
    const { stickyTrigger } = props;
    const { stickyClass } = state;

    if(!stickyTrigger) return;

    if(this.isDesktop()) {
      this.updateDesktop(stickyTrigger, stickyClass);
    } else {
      this.updateMobile(stickyTrigger, stickyClass);
    }
  };

  updateDesktop = (stickyTrigger, stickyClass) => {
    if(stickyTrigger.isTriggered && stickyClass !== "stick"){
      this.setState({
        stickyClass: "stick",
        stickyObjectTop: { top: (window.innerHeight / 2 - 100) + "px" }
      });
    }
    else if(!stickyTrigger.isTriggered){
      if(stickyTrigger.isBeforeTrigger && stickyClass !== "above-boundry") {
        this.setState({ stickyClass: "above-boundry", stickyObjectTop: {} });
      }
      else if(stickyTrigger.isPastTrigger && stickyClass !== "below-boundry") {
        this.setState({ stickyClass: "below-boundry", stickyObjectTop: {}  });
      }
    }
  };

  updateMobile = (stickyTrigger, stickyClass) => {
    if(stickyTrigger.isTriggered && stickyClass !== "animate-show"){
      this.setState({ stickyClass: "animate-show", stickyObjectTop: {} });
    }
    else if(!stickyTrigger.isTriggered && stickyClass !== ""){
      this.setState({ stickyClass: "", stickyObjectTop: {} });
    }
  };

  render() {
    return (
      <div className={ "desktop-estimate " + this.state.stickyClass } style={ this.state.stickyObjectTop }>
        <ItemizedEstimate items={ this.props.items } total={ this.props.total } />
      </div>
    );
  };
}

export default DesktopCommissionEstimate;
