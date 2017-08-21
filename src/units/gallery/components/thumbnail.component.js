import React from 'react';
import PropTypes from 'prop-types';

function Thumbnail({ url, onClick }) {

  const handleClick = () => {
    if(onClick) {
      onClick(url);
    }
  };

  return (
    <div className="thumbnail-container" onClick={ handleClick }>
      <img src={ url } alt="kimbyarting previous work thumbnail" title="kimby arting previous work example thumbnail" />
    </div>
  );
}

Thumbnail.propTypes = {
  onClick: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired
}

export default Thumbnail;
