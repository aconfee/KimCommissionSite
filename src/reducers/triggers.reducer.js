import { updateObject } from './reducerUtilities.js';
import { UPDATE_TRIGGER_ACTION_TYPE } from '../units/scrollTrigger/actions/scrollTriggerObject.action.js';

const initialState = {
  stickyEstimateTrigger: {
    isTriggered: false,
    isBeforeTrigger: false,
    isPastTrigger: false
  }
};

const updateTrigger = (triggersState, action) => {
  return updateObject(triggersState, { [action.name]: action.newState });
};

const triggersReducer = (triggersState = initialState, action) => {
  switch (action.type) {
    case UPDATE_TRIGGER_ACTION_TYPE: return updateTrigger(triggersState, action);
    default: return triggersState;
  }
};

export default triggersReducer;
