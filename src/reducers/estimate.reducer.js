import { updateObject } from './reducerUtilities.js';
import { SELECT_COMMISSION_OPTION_ACTION_TYPES } from '../units/commissionOptionPicker/actions/commissionOptionPicker.action.js';
import { UPDATE_DISCOUNT_ACTION_TYPE } from '../units/discountCheckbox/actions/discountCheckbox.action.js';
import PRICING from '../constants/commissionPriceChart.js';

const { FRAMING_SELECTED, LEVEL_OF_DETAIL_SELECTED, NUMBER_OF_CHARACTERS_SELECTED, BACKGROUND_SELECTED } = SELECT_COMMISSION_OPTION_ACTION_TYPES;

const initialState = {
    detailIndex: 0,
    framingIndex: 0,
    backgroundIndex: 0,
    character: PRICING.character[0][0],
    numberOfCharacters: 1,
    background: PRICING.background[0],
    discount: 1,
    total: PRICING.character[0][0] + PRICING.background[0]
};

const updateTotalEstimate = (estimateState, characterPrice = null, numberOfCharacters = null, backgroundPrice = null, discount = null) => {
  if(characterPrice === null) characterPrice = estimateState.character;
  if(numberOfCharacters === null) numberOfCharacters = estimateState.numberOfCharacters;
  if(backgroundPrice === null) backgroundPrice = estimateState.background;
  if(discount === null) discount = estimateState.discount;

  return parseInt((((characterPrice * numberOfCharacters) + backgroundPrice) * discount).toFixed(0), 10);
};

const selectFrame = (estimateState, action) => {
  const character = PRICING.character[estimateState.detailIndex][action.index];
  return updateObject(estimateState, {
    framingIndex: action.index,
    character,
    total: updateTotalEstimate(estimateState, character, null, null, null)
  });
};

const selectDetail = (estimateState, action) => {
  const character = PRICING.character[action.index][estimateState.framingIndex];
  return updateObject(estimateState, {
    detailIndex: action.index,
    character,
    total: updateTotalEstimate(estimateState, character, null, null, null)
  });
};

const selectNumberOfCharacters = (estimateState, action) => {
  const numberOfCharacters = action.index + 1;
  return updateObject(estimateState, {
    numberOfCharacters,
    total: updateTotalEstimate(estimateState, null, numberOfCharacters, null, null)
  });
};

const selectBackround = (estimateState, action) => {
  const background = PRICING.background[action.index];
  return updateObject(estimateState, {
    backgroundIndex: action.index,
    background,
    total: updateTotalEstimate(estimateState, null, null, background, null)
  });
};

const updateDiscount = (estimateState, action) => {
  const discount = action.isChecked ? 0.7 : 1;

  return updateObject(estimateState, {
    discount,
    total: updateTotalEstimate(estimateState, null, null, null, discount)
  })
}

const estimateReducer = (estimateState = initialState, action) => {
  switch (action.type) {
    case FRAMING_SELECTED: return selectFrame(estimateState, action);
    case LEVEL_OF_DETAIL_SELECTED: return selectDetail(estimateState, action);
    case NUMBER_OF_CHARACTERS_SELECTED: return selectNumberOfCharacters(estimateState, action);
    case BACKGROUND_SELECTED: return selectBackround(estimateState, action);
    case UPDATE_DISCOUNT_ACTION_TYPE: return updateDiscount(estimateState, action);
    default: return estimateState;
  }
};

export default estimateReducer;
