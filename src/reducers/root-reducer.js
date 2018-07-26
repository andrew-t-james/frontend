import { combineReducers } from 'redux';
import { houses } from './houses-reducer';
import { members } from './member-reducer';
import { index } from './index-reducer';

const rootReducer = combineReducers({
  houses,
  members,
  index
});

export default rootReducer;
