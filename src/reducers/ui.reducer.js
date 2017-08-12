import { TOGGLE_HACKY_ASS_MODAL } from '../units/discountCheckbox/actions/discountCheckbox.action.js';

const initialState = {
  modals: {
    showTooltipModal: false
  }
};

const toggleTooltip = (uiState, action) => {
  return {
    ...uiState,
    modals: {
      showTooltipModal: !uiState.modals.showTooltipModal
    }
  }
};

const uiReducer = (uiState = initialState, action) => {
  switch (action.type) {
    case TOGGLE_HACKY_ASS_MODAL: return toggleTooltip(uiState, action);
    default: return uiState;
  }
};

export default uiReducer;
