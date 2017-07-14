import React, { Component } from 'react';
import './hamburger.component.css';

class Hamburger extends Component {

  constructor(props) {
    super(props);

    this.state = { isOpen: false, defaultState: true };
  }

  handleClick = () => {
    this.setState( prevState =>  ({ isOpen: !prevState.isOpen, defaultState: false }));
  }

  animateHamburger = () => {
    if(this.state.defaultState === true) return "";

    return this.state.isOpen ? "animate" : "hide";
  }

  animateCross = () => {
    if(this.state.defaultState === true) return "hide";

    return this.state.isOpen ? "hide" : "animate";
  }

  render() {
    return (
      <div className="hamburger" onClick={ this.handleClick }>
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
