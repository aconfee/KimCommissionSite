import React from 'react';
import PropTypes from 'prop-types';
import './optionButton.component.css';

OptionButton.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

function OptionButton({ id, onClick }) {

  const handleClick = () => {
    onClick( id );
  }

  return (
    <div className="button" onClick={ handleClick }></div>
  );

}

export default OptionButton;
