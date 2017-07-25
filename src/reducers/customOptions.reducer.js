const CustomOptionsReducer = (state = '', action) => {
  return 'Redux!';
  /*
  switch (action.type) {
    case 'SELECT_LEVEL_OF_DETAIL':
      return {
        ...state,
        levelOfDetailIndex: action.index
      };
    default:
      return state;
  }
  */
}

export default CustomOptionsReducer;
