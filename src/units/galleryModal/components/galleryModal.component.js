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
    if(nextProps.index) {
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

  renderCurrentImage = () => {
    if(this.state.activeIndex >= this.props.images.length) return null;

    return ( <img src={ this.props.images[this.state.activeIndex] } alt="kimbyarting previous work" title="kimby arting previous work example" /> )
  }

  render() {
    if(!this.props.show || this.props.images.length === 0) return null;

    return (
      <div id="gallery-modal" className="overlay">
        <div className="gallery-close" onClick={ this.props.onClick }>
          <div className="line top"></div>
          <div className="line bottom"></div>
        </div>
        <div className="previous" style={ arrowImageStyle } onClick={ this.handlePrevious }>

        </div>
        <div className="gallery-modal-continer">
          { this.renderCurrentImage() }
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
