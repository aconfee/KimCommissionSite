import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './imageCarouselCoinflip.component.css';

class ImageCarouselCoinflip extends Component {

  constructor(props) {
    super(props);

    this.state = {
      animationClass: "",
      frontSpritePosition: 0,
      backSpritePosition: 0,
      spriteSheet: this.isLarge() ? this.props.spriteSheetLarge : this.props.spriteSheet,
      isLarge: this.isLarge()
    };

    this.imageCache = [];
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.updateSpritesheet);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateSpritesheet);
  };

  componentWillReceiveProps(nextProps) {
    // If index changed, animate.
    if(this.props.activeIndex !== nextProps.activeIndex){
      this.playAnimation(nextProps);
    }
  }

  updateSpritesheet = () => {
    if(this.isLarge() === this.state.isLarge) return;

    this.setState({
      spriteSheet: this.isLarge() ? this.props.spriteSheetLarge : this.props.spriteSheet,
      isLarge: this.isLarge()
    })
  }

  isLarge = () => {
    return window.innerWidth >= 1500;
  }

  getSpritesheetInterval = () => {
    let interval = -300;
    if(window.innerWidth >= 1000) {
      interval = -450;
    }
    if(window.innerWidth >= 1500) {
      interval = -600;
    }
    if(window.innerWidth >= 2000) {
      interval = -700;
    }

    return interval;
  }

  playAnimation = (nextProps) => {
    let nextPosition = nextProps.activeIndex * this.getSpritesheetInterval();

    // Flip
    const animationClass = this.props.activeIndex < nextProps.activeIndex
      ? "animate-flip-right"
      : "animate-flip-left";

    this.setState({
      animationClass: animationClass,
      backSpritePosition: nextPosition
    });

    // Prepare front image for animation reset.
    setTimeout(function() {
      this.setState({
        frontSpritePosition: nextPosition,
        animationClass: ""
      });
    }.bind(this), 1000);
  }

  render() {
    const { animationClass, frontSpritePosition, backSpritePosition } = this.state;

    return (
      <div className="option-display-container">
        <div className={ "flip-container " + animationClass }>
          <div className="front"
            style={{
              backgroundImage: `url(${this.state.spriteSheet})`,
              backgroundSize: "500% 100%",
              backgroundPosition: frontSpritePosition + "px 0px"
            }}>
          </div>
          <div className="back" style={{
            backgroundImage: `url(${this.state.spriteSheet})`,
            backgroundSize: "500% 100%",
            backgroundPosition: backSpritePosition + "px 0px"
          }}>
          </div>
        </div>
      </div>
    );
  }
}

ImageCarouselCoinflip.propTypes = {
  spriteSheet: PropTypes.string.isRequired,
  activeIndex: PropTypes.number.isRequired
}

export default ImageCarouselCoinflip;
