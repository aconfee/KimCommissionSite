export const updateTrigger = (name, newState) => {
  return { type: UPDATE_TRIGGER_ACTION_TYPE, name, newState };
};

export const UPDATE_TRIGGER_ACTION_TYPE = "updateTrigger";
