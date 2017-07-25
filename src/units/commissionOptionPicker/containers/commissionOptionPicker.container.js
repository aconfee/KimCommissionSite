import { connect } from 'react-redux';
import { selectCommissionOption } from '../actions/commissionOption.action.js';
import OptionPicker from '../components/optionPicker.component.js';
import IMAGE_SETS from '../../../constants/optionImageSets.js';

const mapStateToProps = (state, ownProps) => {
  // TODO choose image set based on name. No picking images here,
  // just get active image set straight from state. state.lodImageSet[ownProps.name].
  // state.frameImageSet[ownProps.name].
  return {
    images: IMAGE_SETS.FRAME_SKETCH
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(selectCommissionOption(ownProps.name));
    }
  };
};

const CommissionOptionPicker = connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionPicker);

export default CommissionOptionPicker;
