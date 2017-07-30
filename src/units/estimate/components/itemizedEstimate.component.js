import React from 'react';
import PropTypes from 'prop-types';
import './itemizedEstimate.component.css';

function ItemizedEstimate({ estimate } /* items, total */) {
  return (
    <div className="itemized-estimate-container">
      <ul>
        <li>Character: ${estimate.character}</li>
        <li># of Characters: x{estimate.numberOfCharacters}</li>
        <li>Background: ${estimate.background}</li>
        <li>Total: ${estimate.total}</li>
      </ul>
    </div>
  );
}

export default ItemizedEstimate;
