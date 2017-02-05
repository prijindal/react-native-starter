import { combineReducers } from 'redux';

import drawer from './drawer';
import user from './user';
import Routes from '../Routes';

export default combineReducers({
  drawer,
  user,
  nav: (state, action) => (
    Routes.router.getStateForAction(action, state)
  ),
});
