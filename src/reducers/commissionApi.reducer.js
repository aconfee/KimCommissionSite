import { updateObject } from './reducerUtilities.js';
import { SUBMIT_INQUERY_ACTION_TYPE } from '../units/form/actions/inqueryForm.action.js';

const initialState = {
  inqueryResponse: {}
};

const submitInquery = (commissionApiState, action) => {

  const { status, statusText, data } = action.payload;
  console.log(data.message);

  return updateObject(commissionApiState, { inqueryResponse: {
    status, statusText, data
  }});
};

const commissionApiReducer = (commissionApiState = initialState, action) => {
  switch (action.type) {
    case SUBMIT_INQUERY_ACTION_TYPE: return submitInquery(commissionApiState, action);
    default: return commissionApiState;
  }
};

export default commissionApiReducer;
