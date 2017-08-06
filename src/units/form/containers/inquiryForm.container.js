import { connect } from 'react-redux';
import { submitInquery } from '../actions/inquiryForm.action.js';
import InqueryForm from '../components/inquiryForm.component.js';

const mapStateToProps = (state, ownProps) => {
  return {
    estimate: state.estimate
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (senderDetails, commissionDetails) => {
      dispatch(submitInquery(senderDetails, commissionDetails));
    }
  };
};

const InqueryFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InqueryForm);

export default InqueryFormContainer;
