import React from 'react';
import PropTypes from 'prop-types';
import './roundButton.component.css';

RoundButton.propTypes = {
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

function RoundButton({ index, onClick }) {

  const handleClick = () => {
    onClick( index );
  }

  return (
    <div key={ index } className="button" onClick={ handleClick }></div>
  );

}

export default RoundButton;
