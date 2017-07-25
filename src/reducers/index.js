import { combineReducers } from 'redux';
import CustomOptionsReducer from './customOptions.reducer.js';

const CommissionCustomizationStore = combineReducers({
  customOptions: CustomOptionsReducer
});

export default CommissionCustomizationStore;
