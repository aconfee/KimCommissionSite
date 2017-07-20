import React from 'react';
import PropTypes from 'prop-types';
import './hamburger.component.css';

Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

function Hamburger({ isOpen, onClick }) {

  const animateHamburger = () => {
    return isOpen ? "animate" : "hide";
  }

  const animateCross = () => {
    return isOpen ? "hide" : "animate";
  }

  return (
    <div className="hamburger" onClick={ onClick }>
      <div id="top-burger" className={ "line top " + animateHamburger() }></div>
      <div id="middle-burger" className={ "line middle " + animateHamburger() }></div>
      <div id="bottom-burger" className={ "line bottom " + animateHamburger() }></div>

      <div id="top-cross" className={ "line top " + animateCross() }></div>
      <div id="middle-cross" className={ "line middle " + animateCross() }></div>
      <div id="bottom-cross" className={ "line bottom " + animateCross() }></div>
    </div>
  );
}

export default Hamburger;
