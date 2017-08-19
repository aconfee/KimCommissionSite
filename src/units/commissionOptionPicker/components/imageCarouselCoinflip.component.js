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
    // If index changed, animate.
    if(this.props.activeIndex !== nextProps.activeIndex){
      this.playAnimation(nextProps);
    } else {
      // If images changed (but not index), set.
      this.setState({
        frontImageUrl: nextProps.images[nextProps.activeIndex],
        backImageUrl: nextProps.images[nextProps.activeIndex]
      });
    }
  }

  playAnimation = (nextProps) => {
    const { images, activeIndex } = this.props;

    // 1. Prepare back image for flip.
    this.setState({
      backImageUrl: images[nextProps.activeIndex]
    });

    // 2. Flip
    const animationClass = activeIndex < nextProps.activeIndex
      ? "animate-flip-right"
      : "animate-flip-left";

    setTimeout(function() {
      this.setState({ animationClass: animationClass });
    }.bind(this), 100);

    // 3. Prepare front image for animation reset.
    setTimeout(function() {
      this.setState({ frontImageUrl: images[nextProps.activeIndex] });
    }.bind(this), 850);

    // 4. Remove animation class (prepare for next play).
    setTimeout(function() {
      this.setState({ animationClass: "" });
    }.bind(this), 1000);
  }

  render() {
    const { animationClass, frontImageUrl, backImageUrl } = this.state;

    return (
      <div className="option-display-container">
        <div className={ "flip-container " + animationClass }>
          <div className="front">
            <img className="display-image" src={ frontImageUrl } alt="option display" title="option display" />
          </div>
          <div className="back">
            <img className="display-image" src={ backImageUrl } alt="option display" title="options display" />
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
