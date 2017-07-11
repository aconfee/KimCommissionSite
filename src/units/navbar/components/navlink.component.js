import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './navlink.component.css';

Navlink.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

function Navlink({text, url}) {

  const isActive = () => {
    return window.location.pathname === url;
  }

  const renderActiveIndicator = () => {
    if( isActive() ) {
      return (
        <div className="active-indicator">
          <svg height="6" width="6">
            <circle cx="3" cy="3" r="3" fill="black" />
          </svg>
        </div>
      );
    }

    return null;
  }

  return (
    <span className="navbar-link">
      <Link to={ url } style={ (isActive()) ? {color:"black"} : {} }>
        { text }
      </Link>
      { renderActiveIndicator() }
    </span>
  );
}

export default Navlink;
