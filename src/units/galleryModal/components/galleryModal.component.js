import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './galleryModal.component.css';

import arrowImage from '../arrow.png';

var arrowImageStyle = {
    backgroundImage: `url(${arrowImage})`
}

class GalleryModal extends Component {

  constructor(props) {
    super(props);

    this.state = { activeIndex: 0 };
  }

  componentWillReceiveProps = (nextProps) => {
    if(this.nextProps.index) {
      this.setState({ activeIndex: nextProps.index });
    }
  }

  handlePrevious = () => {
    let activeIndex = this.state.activeIndex - 1;
    if(activeIndex < 0) activeIndex = this.props.images.length - 1;

    this.setState({ activeIndex });
  };

  handleNext = () => {
    let activeIndex = this.state.activeIndex + 1;
    if(activeIndex >= this.props.images.length) activeIndex = 0;

    this.setState({ activeIndex });
  };

  render() {
    const { show, images } = this.props;

    if(!show) return null;

    return (
      <div className="overlay">
        <div className="gallery-close" onClick={ this.props.onClick }>
          <div className="line top"></div>
          <div className="line bottom"></div>
        </div>
        <div className="previous" style={ arrowImageStyle } onClick={ this.handlePrevious }>

        </div>
        <div className="gallery-modal-continer">
          <img src={ images[this.state.activeIndex] } alt="kimbyarting previous work" title="kimby arting previous work example" />
        </div>
        <div className="next" style={ arrowImageStyle } onClick={ this.handleNext }>

        </div>
      </div>
    );
  };
};

GalleryModal.propTypes = {
  onClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  show: PropTypes.bool.isRequired,
  indexa: PropTypes.number
}

export default GalleryModal;
