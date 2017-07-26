import { combineReducers } from 'redux';
import CommissionOptionsReducer from './commissionOptionsReducer.reducer.js';

const CommissionCustomizationStore = combineReducers({
  commissionCustomization: CommissionOptionsReducer
});

export default CommissionCustomizationStore;
