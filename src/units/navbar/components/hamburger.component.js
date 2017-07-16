import React, { Component } from 'react';
import './hamburger.component.css';

class Hamburger extends Component {
  animateHamburger = () => {
    return this.props.isOpen ? "animate" : "hide";
  }

  animateCross = () => {
    return this.props.isOpen ? "hide" : "animate";
  }

  render() {
    return (
      <div className="hamburger" onClick={ this.props.onClick }>
        <div id="top-burger" className={ "line top " + this.animateHamburger() }></div>
        <div id="middle-burger" className={ "line middle " + this.animateHamburger() }></div>
        <div id="bottom-burger" className={ "line bottom " + this.animateHamburger() }></div>

        <div id="top-cross" className={ "line top " + this.animateCross() }></div>
        <div id="middle-cross" className={ "line middle " + this.animateCross() }></div>
        <div id="bottom-cross" className={ "line bottom " + this.animateCross() }></div>
      </div>
    );
  }
}

export default Hamburger;
