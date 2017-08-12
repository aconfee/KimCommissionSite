import { connect } from 'react-redux';
import { applyDiscount } from '../actions/discountCheckbox.action.js';
import { toggleHackyAssModal } from '../actions/discountCheckbox.action.js';
import DiscountCheckbox from '../components/discountCheckbox.component.js';

const mapStateToProps = (state, ownProps) => {
  return {
    label: ownProps.label,
    isChecked: state.estimate.discount === 1 ? false : true
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (isChecked) => {
      dispatch(applyDiscount(isChecked));
    },
    toggleMobileTooltipModal: () => {
      dispatch(toggleHackyAssModal());
    }
  }
};

const DiscountCheckboxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscountCheckbox);

export default DiscountCheckboxContainer;
