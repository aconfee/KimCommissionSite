import { connect } from 'react-redux';
import { selectCommissionOption } from '../actions/commissionOptionPicker.action.js';
import OptionPicker from '../components/optionPicker.component.js';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: index => {
      dispatch(selectCommissionOption(ownProps.name, index));
    }
  };
};

const CommissionOptionPicker = connect(
  null,
  mapDispatchToProps
)(OptionPicker);

export default CommissionOptionPicker;
