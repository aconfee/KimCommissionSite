export const selectCommissionOption = name => {

  // TODO set what new options are. type: 'selectCommissionOption'. optionName: 'LOD'.
  switch( name ) {
    case "TEST":
      return { type: "TEST", name }
    default:
      return { type: "TEST", name: "default" }
  }
};
