import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './imageCarouselCoinflip.component.css';


import spriteSheet from '../detail_spritesheet.png';

//var backgroundImagePositionStyle = { backgroundPosition: "0px 0px" };

class ImageCarouselCoinflip extends Component {

  constructor(props) {
    super(props);

    const { images, activeIndex } = this.props;

    this.state = {
      frontImageUrl: images[activeIndex],
      backImageUrl: images[activeIndex],
      animationClass: "",
      indexFront: 0,
      indexBack: 0,
      backgroundImageStyleBack: {
        backgroundImage: `url(${spriteSheet})`,
        backgroundPosition: "0px, 0px"
      },
      backgroundImageStyleFront: {
        backgroundImage: `url(${spriteSheet})`,
        backgroundPosition: "0px, 0px"
      },
      frontPosition: 0,
      backPosition: 0
    };

    this.imageCache = [];
  }

  componentDidMount = () => {
    const { images } = this.props;

    // Preload all images for seamless animation.
    for(let i = 0; i < images.length; i++){
      this.imageCache.push(new Image());
      this.imageCache[i].src = images[i];
    }
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
    let nextPosition = nextProps.activeIndex * -450;
    /*(this.setState({
      backImageUrl: images[nextProps.activeIndex],
      backPosition: nextPosition
    });*/

    // 2. Flip
    const animationClass = activeIndex < nextProps.activeIndex
      ? "animate-flip-right"
      : "animate-flip-left";

    setTimeout(function() {
      this.setState({
        animationClass: animationClass,
        backPosition: nextPosition
      });
    }.bind(this), 50);

    // 3. Prepare front image for animation reset.
    setTimeout(function() {
      this.setState({
        frontImageUrl: images[nextProps.activeIndex],
        frontPosition: nextPosition,
        animationClass: ""
      });
    }.bind(this), 1050);

    // 4. Remove animation class (prepare for next play).
    setTimeout(function() {
      //this.setState({ animationClass: "" });
    }.bind(this), 2000);
  }

  render() {
    const { animationClass, frontImageUrl, backImageUrl } = this.state;

    return (
      <div className="option-display-container">
        <div className={ "flip-container " + animationClass }>
          <div className="front" style={{
            backgroundImage: `url(${spriteSheet})`,
            backgroundSize: "500% 100%",
            backgroundPosition: this.state.frontPosition + "px, 0px"
          }}
          >

          </div>
          <div className="back" style={{
            backgroundImage: `url(${spriteSheet})`,
            backgroundPosition: this.state.backPosition + "px, 0px"
          }}>

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
