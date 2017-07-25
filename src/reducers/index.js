import { combineReducers } from 'redux';
import CommissionOptionsReducer from './commissionOptionsReducer.reducer.js';

const CommissionCustomizationStore = combineReducers({
  customCommission: CommissionOptionsReducer
});

export default CommissionCustomizationStore;
