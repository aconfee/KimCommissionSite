import { updateObject } from './reducerUtilities.js';
import { SELECT_COMMISSION_OPTION_ACTION_TYPES } from '../units/commissionOptionPicker/actions/commissionOptionPicker.action.js';
import PRICING from '../constants/commissionPriceChart.js';

const { FRAMING_SELECTED, LEVEL_OF_DETAIL_SELECTED, NUMBER_OF_CHARACTERS_SELECTED, BACKGROUND_SELECTED } = SELECT_COMMISSION_OPTION_ACTION_TYPES;
const initialState = {
    detailIndex: 0,
    framingIndex: 0,
    character: PRICING.character[0][0],
    numberOfCharacters: 1,
    background: PRICING.background[0],
    total: PRICING.character[0][0] + PRICING.background[0]
};

const updateTotalEstimate = (estimateState, characterPrice = null, numberOfCharacters = null, backgroundPrice = null) => {
  if(characterPrice === null) characterPrice = estimateState.character;
  if(numberOfCharacters === null) numberOfCharacters = estimateState.numberOfCharacters;
  if(backgroundPrice === null) backgroundPrice = estimateState.background;

  return (characterPrice * numberOfCharacters) + backgroundPrice;
};

const selectFrame = (estimateState, action) => {
  const character = PRICING.character[estimateState.detailIndex][action.index];
  return updateObject(estimateState, {
    framingIndex: action.index,
    character,
    total: updateTotalEstimate(estimateState, character, null, null)
  });
};

const selectDetail = (estimateState, action) => {
  const character = PRICING.character[action.index][estimateState.framingIndex];
  return updateObject(estimateState, {
    detailIndex: action.index,
    character,
    total: updateTotalEstimate(estimateState, character, null, null)
  });
};

const selectNumberOfCharacters = (estimateState, action) => {
  const numberOfCharacters = action.index + 1;
  return updateObject(estimateState, {
    numberOfCharacters,
    total: updateTotalEstimate(estimateState, null, numberOfCharacters, null)
  });
};

const selectBackround = (estimateState, action) => {
  const background = PRICING.background[action.index];
  return updateObject(estimateState, {
    background,
    total: updateTotalEstimate(estimateState, null, null, background)
  });
};

const estimateReducer = (estimateState = initialState, action) => {
  switch (action.type) {
    case FRAMING_SELECTED: return selectFrame(estimateState, action);
    case LEVEL_OF_DETAIL_SELECTED: return selectDetail(estimateState, action);
    case NUMBER_OF_CHARACTERS_SELECTED: return selectNumberOfCharacters(estimateState, action);
    case BACKGROUND_SELECTED: return selectBackround(estimateState, action);
    default: return estimateState;
  }
};

export default estimateReducer;
