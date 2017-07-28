import { SELECT_COMMISSION_OPTION_ACTION_TYPES as ACTION_TYPES } from '../units/commissionOptionPicker/actions/commissionOptionPicker.action.js';
import PRICING from '../constants/commissionPriceChart.js';

const DEFAULT_STATE = {
  estimate: {
    character: PRICING.character[0][0],
    numberOfCharacters: 1,
    background: PRICING.background[0],
    total: PRICING.character[0][0] + PRICING.background[0]
  },
  selectedOptions: {
    levelOfDetailIndex: 0,
    framingIndex: 0
  }
};

const CommissionOptionsReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.FRAMING_SELECTED:
      let characterPriceFrame = PRICING.character[state.selectedOptions.levelOfDetailIndex][action.index];

      return {
        ...state,
        selectedOptions: {
          ...state.selectedOptions,
          framingIndex: action.index
        },
        estimate: {
          ...state.estimate,
          character: characterPriceFrame,
          total: (characterPriceFrame * state.estimate.numberOfCharacters) + state.estimate.background
        }
      };
    case ACTION_TYPES.LEVEL_OF_DETAIL_SELECTED:
      let characterPriceDetail = PRICING.character[action.index][state.selectedOptions.framingIndex];

      return {
        ...state,
        selectedOptions: {
          ...state.selectedOptions,
          levelOfDetailIndex: action.index
        },
        estimate: {
          ...state.estimate,
          character: characterPriceDetail,
          total: (characterPriceDetail * state.estimate.numberOfCharacters) + state.estimate.background
        }
      };
    case ACTION_TYPES.NUMBER_OF_CHARACTERS_SELECTED:
      let numberOfCharacters = action.index + 1;

      return {
        ...state,
        estimate: {
          ...state.estimate,
          numberOfCharacters: numberOfCharacters,
          total: (state.estimate.character * numberOfCharacters) + state.estimate.background
        }
      };
    case ACTION_TYPES.BACKGROUND_SELECTED:
      let backgroundPrice = PRICING.background[action.index];

      return {
        ...state,
        estimate: {
          ...state.estimate,
          background: backgroundPrice,
          total: (state.estimate.character * state.estimate.numberOfCharacters) + backgroundPrice
        }
      };
    default:
      return state;
  }
}

export default CommissionOptionsReducer;
