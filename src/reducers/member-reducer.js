export const members = (state = [], action) => {
  switch (action.type) {
  case 'MEMBERS':
    return action.members;
  default:
    return state;
  }
};