export const members = (state = [], action) => {
  switch (action.type) {
  case 'MEMBERS':
    console.log(action);
    return action.members;
  default:
    return state;
  }
};