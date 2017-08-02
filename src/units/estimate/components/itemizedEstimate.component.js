import React from 'react';
import PropTypes from 'prop-types';
import './itemizedEstimate.component.css';

ItemizedEstimate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    displayValue: PropTypes.string
  })).isRequired,
  total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

function ItemizedEstimate({ items, total }) {

  const renderItems = () => {
    return items.map((item, index) => {
      return (
        <div key={ index } className="item-container">
          <div className="label">{ item.label }</div>
          <div className="value">{ item.displayValue }</div>
        </div>);
    });
  };

  return (
    <div className="itemized-estimate-container font-size-small font-color-light">
      <p className="title font-color-dark">Estimate<span className="mobile-total">${ total }</span></p>
      <div className="item-group-container">
        { renderItems() }
      </div>
      <p className="total font-color-dark">${ total }</p>
    </div>
  );
}

export default ItemizedEstimate;
