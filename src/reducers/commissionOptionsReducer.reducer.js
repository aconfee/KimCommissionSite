const defaultState = {
  customCommission: "default from reducer"
};

const CommissionOptionsReducer = (state = defaultState, action) => {

  // TODO set a default state -- default active image sets and
  // prices.
  // Do this first, then with active state in place, fix up the
  // action and container to use the defaults. Make sure everything
  // is working at this point before proceeding to update state.
  // Go ahead and make LOD and framing containers that switch image
  // sets. May as well hold off on making all containers until
  // actually updating price.


  // TODO with the action typ (selectOption) and option name,
  // return the new state -- new prices and new active image sets.
  switch (action.type) {
    case 'TEST':
      return {
        ...state,
        customCommission: action.name
      };
    default:
      return state;
  }
}

export default CommissionOptionsReducer;
