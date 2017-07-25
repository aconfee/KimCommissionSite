import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './imageCarouselCoinflip.component.css';

class ImageCarouselCoinflip extends Component {

  constructor(props) {
    super(props);

    const { images, activeIndex } = this.props;

    this.state = {
      frontImageUrl: images[activeIndex],
      backImageUrl: images[activeIndex],
      animationClass: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    this.playAnimation(nextProps);

    // 750 is tied to the flip animation duration.
    this.timeoutId = setTimeout(function() { this.resetAnimtion(); }.bind(this), 750);
  }

  playAnimation = (nextProps) => {
    const { images, activeIndex } = this.props;

    const animationClass = activeIndex < nextProps.activeIndex
      ? "animate-flip-right"
      : "animate-flip-left";

    this.setState({
      frontImageUrl: images[activeIndex],
      backImageUrl: images[nextProps.activeIndex],
      animationClass: animationClass
    });

  }

  resetAnimtion = () => {
    const { images, activeIndex } = this.props;

    this.setState({
      frontImageUrl: images[activeIndex],
      backImageUrl: images[activeIndex],
      animationClass: ""
    });

    clearTimeout(this.timeoutId);
  }

  render() {

    const { animationClass, frontImageUrl, backImageUrl } = this.state;

    return (
      <div className="option-display-container">
        <div className={ "flip-container " + animationClass }>
          <div className="front">
            <img className="display-image" src={ frontImageUrl } alt="level of detail display" title="level of detail display" />
          </div>
          <div className="back">
            <img className="display-image" src={ backImageUrl } alt="level of detail display" title="level of detail display" />
          </div>
        </div>
      </div>
    );
  }
}

ImageCarouselCoinflip.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeIndex: PropTypes.number.isRequired
}

export default ImageCarouselCoinflip;
