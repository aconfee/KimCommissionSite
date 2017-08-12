export const applyDiscount = (isChecked) => {
  return { type: UPDATE_DISCOUNT_ACTION_TYPE, isChecked };
};

export const toggleHackyAssModal = () => {
  return { type: TOGGLE_HACKY_ASS_MODAL };
}

export const UPDATE_DISCOUNT_ACTION_TYPE = "updateDiscount";
export const TOGGLE_HACKY_ASS_MODAL = "killme";
