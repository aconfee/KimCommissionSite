import OPTION_NAMES from '../../../constants/optionNames.js';

export const selectCommissionOption = (name, index) => {

  switch( name ) {
    case OPTION_NAMES.FRAMING:
      return { type: "FRAMING_SELECTED", index }
    case OPTION_NAMES.LEVEL_OF_DETAIL:
      return { type: "LEVEL_OF_DETAIL_SELECTED", index }
    case OPTION_NAMES.BACKGROUND:
      return { type: "BACKGROUND_SELECTED", index }
    case OPTION_NAMES.NUMBER_OF_CHARACTERS:
      return { type: "NUMBER_OF_CHARACTERS_SELECTED", index }
    default:
      return { type: "", index: 0 }
  }
};
