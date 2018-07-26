export const houses = (state = [], action) => {
  switch (action.type) {
  case 'GET_HOUSES':
    console.log(action);
    return state;
  default:
    return state;
  }
};
