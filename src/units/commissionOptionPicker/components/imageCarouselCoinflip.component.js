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
    console.log('Receiving props.');
    // If index changed, animate.
    if(this.props.activeIndex !== nextProps.activeIndex){
      this.playAnimation(nextProps);
      this.timeoutId = setTimeout(function() { this.resetAnimtion(); }.bind(this), 10000); // 750 is tied to the flip animation duration.
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

    const animationClass = activeIndex < nextProps.activeIndex
      ? "animate-flip-right"
      : "animate-flip-left";

    console.log(`Playing animation. Front ${activeIndex}. Back ${nextProps.activeIndex}.`);
    this.setState({
      frontImageUrl: images[activeIndex],
      backImageUrl: images[nextProps.activeIndex],
      animationClass: animationClass
    });

  }

  resetAnimtion = () => {
    const { images, activeIndex } = this.props;

    console.log(`Reseting animation. Front ${activeIndex}. Back ${activeIndex}.`);
    this.setState({
      frontImageUrl: images[activeIndex],
      backImageUrl: images[activeIndex],
      animationClass: ""
    });

    clearTimeout(this.timeoutId);
  }

  render() {
    const { animationClass, frontImageUrl, backImageUrl } = this.state;
    console.log(`Rendering coin. ${animationClass}, ${frontImageUrl}, ${backImageUrl}.`)

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
