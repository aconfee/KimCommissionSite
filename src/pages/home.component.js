import React, { Component } from 'react';
import './home.component.css';
import { connect } from 'react-redux';
import IMAGE_SETS from '../constants/optionImageSets.js';
import Landing from '../units/landing/components/landing.component.js';
import OptionSelectorContainer from '../units/optionSelector/components/optionSelectorContainer.component.js';

class Home extends Component {
  render() {
    return(
      <div>
        <div className="background">
          <div className="elipse"></div>
        </div>
        { Landing() }
        <div className="option-selectors">
          <OptionSelectorContainer images={ IMAGE_SETS.FRAME_SKETCH } text="How should it be framed?" />
          <OptionSelectorContainer images={ IMAGE_SETS.LEVEL_OF_DETAIL_BUST } text="How much detail do you want?" />
          <OptionSelectorContainer images={ IMAGE_SETS.BACKGROUND } text="What type of background do you want?" />
          <OptionSelectorContainer images={ IMAGE_SETS.NUMBER_OF_CHARACTERS } text="How many characters do you want?" />
        </div>
        <h1>{ this.props.customOptions }</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    customOptions: state.customOptions
  };
};

export default connect(mapStateToProps)(Home);

//export default Home;
