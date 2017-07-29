import { combineReducers } from 'redux';
import estimateReducer from './estimate.reducer.js';

const CommissionCustomizationStore = combineReducers({
  estimate: estimateReducer
});

export default CommissionCustomizationStore;
