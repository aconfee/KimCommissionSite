import { connect } from 'react-redux';
import { sendMessage } from '../actions/inquiryForm.action.js';
import ContactForm from '../components/contactForm.component.js';

const mapStateToProps = (state, ownProps) => {
  return {
    messageResponse: state.commissionApi.messageResponse
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (senderDetails, commissionDetails) => {
      dispatch(sendMessage(senderDetails));
    }
  };
};

const ContactFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);

export default ContactFormContainer;
