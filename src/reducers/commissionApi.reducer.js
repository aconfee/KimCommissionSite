import { updateObject } from './reducerUtilities.js';
import { SUBMIT_INQUERY_ACTION_TYPE } from '../units/form/actions/inquiryForm.action.js';

const initialState = {
  inquiryResponse: {
    timestamp: Date.now()
  }
};

const submitInquery = (commissionApiState, action) => {

  let { status, statusText, data } = action.payload;

  if(!status) {
    status = 500;
    statusText = "Oops! Something went wrong. Please reach out to me on Instagram or Facebook to let me know.";
    data = null;
  }

  var thing = updateObject(commissionApiState, { inquiryResponse: {
    status, statusText, data, timestamp: Date.now()
  }});

  return thing;
};

const commissionApiReducer = (commissionApiState = initialState, action) => {
  switch (action.type) {
    case SUBMIT_INQUERY_ACTION_TYPE: return submitInquery(commissionApiState, action);
    default: return commissionApiState;
  }
};

export default commissionApiReducer;
