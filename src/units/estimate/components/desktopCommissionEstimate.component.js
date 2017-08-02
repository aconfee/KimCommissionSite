import React, { Component } from 'react';
import './desktopCommissionEstimate.component.css';
import ItemizedEstimate from './itemizedEstimate.component.js';

class DesktopCommissionEstimate extends Component {
  constructor(props) {
    super(props);

    this.state = { stickyClass: "" };
  }

  componentWillUpdate = (nextProps, nextState) => {
    this.update(nextProps, nextState);
  }

  update = (props, state) => {
    const { stickyTrigger } = props;
    const { stickyClass } = state;

    if(!stickyTrigger) return;

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
        this.setState({ stickyClass: "below-boundry", stickyObjectTop: {} });
      }
    }
  };

  render() {
    return (
      <div className={ "desktop-estimate " + this.state.stickyClass } style={ this.state.stickyObjectTop }>
        <ItemizedEstimate items={ this.props.items } total={ this.props.total }/>
      </div>
    );
  };
}

export default DesktopCommissionEstimate;
