import NAMES from '../../../constants/optionNames.js';

export const selectCommissionOption = (name, index) => {

  var actionTypes = SELECT_COMMISSION_OPTION_ACTION_TYPES;

  switch( name ) {
    case NAMES.FRAMING:
      return { type: actionTypes.FRAMING_SELECTED, index }
    case NAMES.LEVEL_OF_DETAIL:
      return { type: actionTypes.LEVEL_OF_DETAIL_SELECTED, index }
    case NAMES.BACKGROUND:
      return { type: actionTypes.BACKGROUND_SELECTED, index }
    case NAMES.NUMBER_OF_CHARACTERS:
      return { type: actionTypes.NUMBER_OF_CHARACTERS_SELECTED, index }
    default:
      return { type: "", index: 0 }
  }
};

export const SELECT_COMMISSION_OPTION_ACTION_TYPES = {
  FRAMING_SELECTED: "framingSelected",
  LEVEL_OF_DETAIL_SELECTED: "levelOfDetailSelected",
  BACKGROUND_SELECTED: "backgroundSelected",
  NUMBER_OF_CHARACTERS_SELECTED: "numberOfCharactersSelected"
};
