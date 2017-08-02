import { combineReducers } from 'redux';
import estimateReducer from './estimate.reducer.js';
import triggersReducer from './triggers.reducer.js';

const CommissionCustomizationStore = combineReducers({
  estimate: estimateReducer,
  triggers: triggersReducer
});

export default CommissionCustomizationStore;
