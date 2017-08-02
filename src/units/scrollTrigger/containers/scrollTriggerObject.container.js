import { connect } from 'react-redux';
import { updateTrigger } from '../actions/scrollTriggerObject.action.js';
import ScrollTriggerObject from '../components/scrollTriggerObject.component.js';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTrigger: (isTriggered, isBeforeTrigger, isPastTrigger) => {
      dispatch(updateTrigger(ownProps.name, {
        isTriggered,
        isBeforeTrigger,
        isPastTrigger
      }));
    }
  };
};

const ScrollTriggerObjectContainer = connect(
  null,
  mapDispatchToProps
)(ScrollTriggerObject);

export default ScrollTriggerObjectContainer;
