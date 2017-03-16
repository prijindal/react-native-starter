/* @flow */
import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { OPEN_DRAWER, CLOSE_DRAWER } from '../actions/drawer';

export type State = {
    drawerState: string,
    drawerDisabled: boolean
}

const INITIAL_STATE = Immutable({
  drawerState: 'closed',
  drawerDisabled: true,
});

const openDrawer = (state: State = INITIAL_STATE) => ({
  ...state,
  drawerState: 'opened',
});

const closeDrawer = (state: State = INITIAL_STATE) => ({
  ...state,
  drawerState: 'closed',
});

const HANDLERS = {
  [OPEN_DRAWER]: openDrawer,
  [CLOSE_DRAWER]: closeDrawer,
};

export default createReducer(INITIAL_STATE, HANDLERS);
