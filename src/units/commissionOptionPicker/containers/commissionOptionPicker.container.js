import { connect } from 'react-redux';
import { selectCommissionOption } from '../actions/commissionOption.action.js';
import OptionPicker from '../components/optionPicker.component.js';

const mapStateToProps = (state, ownProps) => {

  let images = state.commissionCustomization.activeImageSets[ownProps.name];
  if(!images) {
    console.log('no state images, choosing local');
    images = ownProps.images;
  }

  return {
    images: images,
    text: ownProps.text
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: index => {
      dispatch(selectCommissionOption(ownProps.name, index));
    }
  };
};

const CommissionOptionPicker = connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionPicker);

export default CommissionOptionPicker;
