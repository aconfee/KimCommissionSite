import React from 'react';
import PropTypes from 'prop-types';
import './optionButton.component.css';

OptionButton.propTypes = {
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

function OptionButton({ index, onClick }) {

  const handleClick = () => {
    onClick( index );
  }

  return (
    <div key={ index } className="button" onClick={ handleClick }></div>
  );

}

export default OptionButton;
