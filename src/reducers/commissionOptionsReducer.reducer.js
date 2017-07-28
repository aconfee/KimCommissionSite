import { SELECT_COMMISSION_OPTION_ACTION_TYPES as ACTION_TYPES } from '../units/commissionOptionPicker/actions/commissionOptionPicker.action.js';

const defaultState = {
  estimateViewModel: {
    character: 0,
    numberOfCharacters: "x1",
    background: 0,
    totalEstimate: 0
  },
  selectedCommissionOptions: {
    levelOfDetailIndex: 0,
    framingIndex: 0,
    numberOfCharacters: 1,
    backgroundIndex: 0,
    asIsDiscount: false
  }
};

const CommissionOptionsReducer = (state = defaultState, action) => {

  switch (action.type) {
    case ACTION_TYPES.FRAMING_SELECTED:
      console.log('framing selected. index: ' + action.index);
      return { ...state };
    case ACTION_TYPES.LEVEL_OF_DETAIL_SELECTED:
      console.log('detail selected. index: ' + action.index);
      return { ...state };
    default:
      return state;
  }
}

export default CommissionOptionsReducer;
