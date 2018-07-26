export const houses = (state = [], action) => {
  switch (action.type) {
  case 'GET_HOUSES':
    return action.houses;
  default:
    return state;
  }
};
