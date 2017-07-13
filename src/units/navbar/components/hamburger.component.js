import React, { Component } from 'react';
import './hamburger.component.css';

class Hamburger extends Component {

  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  handleClick = () => {
    this.setState( prevState =>  ({ isOpen: !prevState.isOpen }));
  }

  animate = () => {
    return this.state.isOpen ? "animate" : "";
  }

  render() {
    return (
      <div className="hamburger" onClick={ this.handleClick }>
        <div id="top" className={ "hamburger-line " + this.animate() }></div>
        <div id="middle" className={ "hamburger-line " + this.animate() }></div>
        <div id="bottom" className={ "hamburger-line " + this.animate() }></div>
      </div>
    );
  }
}

export default Hamburger;
