import {connect} from 'react-redux';
import { toggleHackyAssModal } from '../discountCheckbox/actions/discountCheckbox.action.js';
import HackyAssModal from './hackyAssModal.component.js';

const mapStateToProps = (state, ownProps) => {
  return {
    show: state.ui.modals.showTooltipModal
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleMobileTooltipModal: () => {
      dispatch(toggleHackyAssModal());
    }
  }
};

const HackyAssModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HackyAssModal);

export default HackyAssModalContainer;
