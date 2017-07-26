import { OPTION_IMAGE_SETS, SELECTION_MATRIX } from '../constants/optionImageSets.js';
import OPTION_NAMES from '../constants/optionNames.js';

const defaultState = {
  activeImageSets: {
    framing: OPTION_IMAGE_SETS.FRAME_SKETCH,
    levelOfDetail: OPTION_IMAGE_SETS.LEVEL_OF_DETAIL_BUST
  },
  estimate: {
    basePrice: 50,
    levelOfDetail: 0,
    framing: 0,
    background: 0,
    numberOfCharacters: "x1",
    totalEstimate: 50
  },
  inputs: {
    levelOfDetailIndex: 0, // Need to know about each to derive estimate.
    framingIndex: 0,
    asIsDiscount: false
  }
};

const CommissionOptionsReducer = (state = defaultState, action) => {

  switch (action.type) {
    case "FRAMING_SELECTED":
      return {
        ...state,
        activeImageSets: {
          ...state.activeImageSets,
          levelOfDetail: SELECTION_MATRIX[OPTION_NAMES.LEVEL_OF_DETAIL][action.index]
        }
      };
    case "LEVEL_OF_DETAIL_SELECTED":
      return {
        ...state,
        activeImageSets: {
          ...state.activeImageSets,
          framing: SELECTION_MATRIX[OPTION_NAMES.FRAMING][action.index]
        }
      };
    default:
      return state;
  }
}

export default CommissionOptionsReducer;
