import { connect } from 'react-redux';
import { applyDiscount } from '../actions/discountCheckbox.action.js';
import DiscountCheckbox from '../components/discountCheckbox.component.js';

const mapStateToProps = (state, ownProps) => {
  return {
    label: ownProps.label
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (isChecked) => {
      dispatch(applyDiscount(isChecked));
    }
  }
};

const DiscountCheckboxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscountCheckbox);

export default DiscountCheckboxContainer;
