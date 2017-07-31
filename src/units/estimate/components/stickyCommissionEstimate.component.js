import React, { Component } from 'react';
import ItemizedEstimate from './itemizedEstimate.component.js';

const smallDesktopOffsets = {
  left: 100,
  top: 150,
  stickOffset: 150
};

const largeDesktopOffsets = {
  left: 200,
  top: 250,
  stickOffset: 250
};

class StickyCommissionEstimate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      top: -10000,
      left: 0
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  handleScroll = () => {
    const stickToObject = document.getElementsByClassName("option-display-container")[0];
    if(stickToObject === undefined) {
      console.error("Could not find option-display-container");
      return;
    }

    let offsets = smallDesktopOffsets;
    if(window.innerWidth > 1300){
      offsets = largeDesktopOffsets;
    }

    const rect = stickToObject.getBoundingClientRect();
    let top = rect.top + offsets.top;
    if(top <= offsets.stickOffset) top = offsets.stickOffset;

    this.setState({ top, left: rect.right + offsets.left });
  };

  render() {
    return (
      <div style={{ top: this.state.top + "px", left: this.state.left + "px", position: "fixed"}}>
        <ItemizedEstimate items={ this.props.items } total={ this.props.total }/>
      </div>
    );
  };
}

export default StickyCommissionEstimate;
