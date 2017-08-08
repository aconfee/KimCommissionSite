export const applyDiscount = (isChecked) => {
  return { type: UPDATE_DISCOUNT_ACTION_TYPE, isChecked };
};

export const UPDATE_DISCOUNT_ACTION_TYPE = "updateDiscount";
