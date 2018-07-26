import { combineReducers } from 'redux';
import { houses } from './houses-reducer';
import { members } from './member-reducer';

const rootReducer = combineReducers({
  houses,
  members
});

export default rootReducer;
