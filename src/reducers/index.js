
import { combineReducers } from 'redux';

import drawer from './drawer';
import user from './user';

export default combineReducers({
  drawer,
  user,
});
