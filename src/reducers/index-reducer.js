export const index = (state = null, action) => {
  switch (action.type) {
  case 'INDEX':
    return action.index;
  default:
    return state;
  }
};