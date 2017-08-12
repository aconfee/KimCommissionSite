import { combineReducers } from 'redux';
import estimateReducer from './estimate.reducer.js';
import triggersReducer from './triggers.reducer.js';
import commissionApiReducer from './commissionApi.reducer.js';
import uiReducer from './ui.reducer.js';

const CommissionCustomizationStore = combineReducers({
  estimate: estimateReducer,
  triggers: triggersReducer,
  commissionApi: commissionApiReducer,
  ui: uiReducer
});

export default CommissionCustomizationStore;
